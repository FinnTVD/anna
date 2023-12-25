'use client';

import { HoverCardArrow } from '@radix-ui/react-hover-card';
import { HoverCardContent } from '@/components/ui/hover-card';

function DropdownProductHeader() {
  return (
    <HoverCardContent
      className="border-none p-0 w-[100rem]"
      side="bottom"
      align="start"
      sideOffset={6}
    >
      <div>sss</div>
      <HoverCardArrow className="fill-white shadow-md" />
    </HoverCardContent>
  );
}

export default DropdownProductHeader;
