import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { ContainerContent, ContainerItem } from './style';


function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
    return (
        <RdxDropdownMenu.Root>
            {children}
        </RdxDropdownMenu.Root>
    );
}

function DropdownMenuTrigger({ children }: { children: React.ReactNode }) {
    return (
        <RdxDropdownMenu.Trigger style={{ outline: 'none', border: 'none' }}>
            {children}
        </RdxDropdownMenu.Trigger>
    );
}

function DropdownMenuContent({ children }: { children: React.ReactNode }) {
    return (
        <RdxDropdownMenu.Portal>

            <RdxDropdownMenu.Content>

                <ContainerContent>
                    {children}
                </ContainerContent>

            </RdxDropdownMenu.Content>
        </RdxDropdownMenu.Portal>
    );
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
}

function DropdownMenuItem({ children }: DropdownMenuItemProps) {
    return (
        <RdxDropdownMenu.Item style={{ border: 'none', outline: 'none' }}>

            <ContainerItem>
                {children}
            </ContainerItem>

        </RdxDropdownMenu.Item>
    );
}

export const DropdownMenu = {
    Root: DropdownMenuRoot,
    Trigger: DropdownMenuTrigger,
    Content: DropdownMenuContent,
    Item: DropdownMenuItem
};
