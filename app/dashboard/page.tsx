'use client'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
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
            <div className="h-full border border-white/10 bg-gray-800">
              <Chat />
            </div>
          </Panel>
          <Panel defaultSize={70} minSize={50}>
            <div className="h-full p-4 text-white border border-white/10">
              {tab === 'Overview' && <h1>Overview Tab Content</h1>}
              {tab === 'Crypto' && <h1>Crypto Tab Content</h1>}
              {tab === 'Events' && <h1>Events Tab Content</h1>}
              {tab === 'Screener' && <h1>Screener Tab Content</h1>}
            </div>
          </Panel>
        </PanelGroup>
      </div>
      <SideNav activeTab={tab} onTabChange={setTab} />
    </div>
  );
}
