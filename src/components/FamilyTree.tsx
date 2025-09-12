"use client";

import dynamic from "next/dynamic";

const Tree = dynamic(() => import("react-d3-tree").then(mod => mod.Tree), {
  ssr: false,
});

interface FamilyTreeProps {
  data: any;
}

export default function FamilyTree({ data }: FamilyTreeProps) {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Tree
        data={data}
        orientation="horizontal"
        translate={{ x: 200, y: 300 }}
        pathFunc="elbow"
        collapsible
        zoomable
      />
    </div>
  );
}
