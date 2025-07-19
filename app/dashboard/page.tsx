'use client'
import { Panel, PanelGroup } from "react-resizable-panels";
import { useState } from 'react';
import SideNav from '@/components/dashboard/sidenav';
import Chat from '@/components/chat';

export default function Dashboard() {
  const [tab, setTab] = useState('overview');

  return (
    <div className="flex h-full">
      <div className="flex-grow h-full">
        <PanelGroup direction="horizontal">
          <Panel defaultSize={30} minSize={20}>
            <div className="h-full border border-white/10 bg-black/30 backdrop-blur-xl">
              <Chat />
            </div>
          </Panel>
          <Panel defaultSize={70} minSize={50}>
            <div className="h-full p-6 text-white border border-white/10 bg-black/20 backdrop-blur-sm">
              <div className="h-full flex flex-col">
                {tab === 'overview' && (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Overview Dashboard
                      </h1>
                      <p className="text-white/70 text-lg">Your portfolio insights and analytics</p>
                    </div>
                  </div>
                )}
                {tab === 'crypto' && (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        Crypto Analysis
                      </h1>
                      <p className="text-white/70 text-lg">Real-time cryptocurrency data and trends</p>
                    </div>
                  </div>
                )}
                {tab === 'events' && (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                        Market Events
                      </h1>
                      <p className="text-white/70 text-lg">Important market news and events</p>
                    </div>
                  </div>
                )}
                {tab === 'screener' && (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Stock Screener
                      </h1>
                      <p className="text-white/70 text-lg">Filter and analyze stocks by criteria</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Panel>
        </PanelGroup>
      </div>
      <SideNav activeTab={tab} onTabChange={setTab} />
    </div>
  );
}
