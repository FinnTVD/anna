'use client';

import { HoverCardArrow } from '@radix-ui/react-hover-card';
import { HoverCardContent } from '@/components/ui/hover-card';

function DropdownSeeMoreHeader() {
  return (
    <HoverCardContent
      className="border-none p-0 w-[90rem] -mr-[21rem]"
      side="bottom"
      align="end"
      sideOffset={6}
    >
      <div>sss</div>
      <HoverCardArrow className="fill-white shadow-md" />
    </HoverCardContent>
  );
}

export default DropdownSeeMoreHeader;
