import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { CSSProperties } from 'react';
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

interface DropdownMenuContentProps {
  children: React.ReactNode;
  style?: CSSProperties;
  side?: 'top' | 'right' | 'bottom' | 'left'
}

function DropdownMenuContent({ children, style, side }: DropdownMenuContentProps) {
    return (
        <RdxDropdownMenu.Portal>

            <RdxDropdownMenu.Content side={side} style={{ zIndex: 50 }}>

                <ContainerContent style={style}>
                    {children}
                </ContainerContent>

            </RdxDropdownMenu.Content>
        </RdxDropdownMenu.Portal>
    );
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  style?: CSSProperties;
  colorHover?: string;
  onSelect?: () => void;
}

function DropdownMenuItem({ children, style, colorHover, onSelect }: DropdownMenuItemProps) {
    return (
        <RdxDropdownMenu.Item style={{ border: 'none', outline: 'none'}} onSelect={onSelect} >

            <ContainerItem style={style} color={colorHover}>
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
