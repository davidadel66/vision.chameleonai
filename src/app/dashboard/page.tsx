'use client'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function Dashboard() {
  return (
    <div className="h-full">
        <div className="h-full">
        <PanelGroup direction="horizontal">
            <Panel defaultSize={25} minSize={20} maxSize={35}>
            <div className="h-full p-4 text-white border border-white/10 rounded-3xl backdrop-blur-sm bg-black/20">
                AI Chatbot
            </div>
            </Panel>
            <PanelResizeHandle className="w-1" />
            <Panel defaultSize={75} minSize={65}>
            <div className="h-full p-4 text-white border border-white/10 rounded-3xl backdrop-blur-sm bg-black/20">
                Main Content
            </div>
            </Panel>
        </PanelGroup>
        </div>
    </div>

  );
}