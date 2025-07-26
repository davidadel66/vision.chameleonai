import { NextRequest, NextResponse } from 'next/server';

interface AlpacaBar {
  t: string; // timestamp
  o: number; // open
  h: number; // high
  l: number; // low
  c: number; // close
  v: number; // volume
}

interface AlpacaResponse {
  bars: AlpacaBar[];
  next_page_token?: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ticker: string; start: string; end: string }> }
) {
  try {
    const { ticker, start, end } = await params;
    
    // Validate environment variables
    const alpacaKeyId = process.env.ALPACA_KEY_ID;
    const alpacaSecretKey = process.env.ALPACA_SECRET_KEY;
    
    if (!alpacaKeyId || !alpacaSecretKey) {
      return NextResponse.json(
        { error: 'Missing Alpaca API credentials' },
        { status: 500 }
      );
    }

    const baseUrl = 'https://data.alpaca.markets/v2/stocks';
    const timeframe = '1Day';
    const adjustment = 'raw';
    const limit = 1000;
    const feed = 'sip';
    const sort = 'desc';
    
    // Format dates for Alpaca API
    const startFormatted = `${start}T00%3A00%3A00Z`;
    const endFormatted = `${end}T00%3A00%3A00Z`;
    
    const headers = {
      'accept': 'application/json',
      'APCA-API-KEY-ID': alpacaKeyId,
      'APCA-API-SECRET-KEY': alpacaSecretKey,
    };

    const allBars: AlpacaBar[] = [];
    let nextPageToken: string | undefined;

    // Fetch all pages of data
    do {
      let url = `${baseUrl}/${ticker}/bars?timeframe=${timeframe}&start=${startFormatted}&end=${endFormatted}&limit=${limit}&adjustment=${adjustment}&feed=${feed}&sort=${sort}`;
      
      if (nextPageToken) {
        url += `&page_token=${nextPageToken}`;
      }

      const response = await fetch(url, { headers });
      
      if (!response.ok) {
        throw new Error(`Alpaca API error: ${response.status} ${response.statusText}`);
      }

      const data: AlpacaResponse = await response.json();
      
      if (data.bars) {
        allBars.push(...data.bars);
      }
      
      nextPageToken = data.next_page_token;
    } while (nextPageToken);

    // Return the same format as your FastAPI endpoint
    return NextResponse.json([{ bars: allBars }]);
    
  } catch (error) {
    console.error('Stock data fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stock data' },
      { status: 500 }
    );
  }
} 