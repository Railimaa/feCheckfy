import * as RdxPopover from '@radix-ui/react-popover';
import React from 'react';
import { ContainerContent } from './style';

function PopoverRoot({ children }: { children: React.ReactNode }) {
    return (
        <RdxPopover.Root>
            {children}
        </RdxPopover.Root>
    );
}

function PopoverTrigger({ children }: { children: React.ReactNode }) {
    return (
        <RdxPopover.Trigger asChild>
            {children}
        </RdxPopover.Trigger>
    );
}

function PopoverContent({ children }: { children: React.ReactNode }) {
    return (
        <RdxPopover.Portal>
            <RdxPopover.Content style={{ zIndex: '99' }}>
                <ContainerContent>
                    {children}
                </ContainerContent>
            </RdxPopover.Content>
        </RdxPopover.Portal>
    );
}




export const Popover = {
    Root: PopoverRoot,
    Trigger: PopoverTrigger,
    Content: PopoverContent
};
