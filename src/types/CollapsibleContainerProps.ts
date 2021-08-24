type CollapsibleContainerProps = {
    title?: string;
    content?: string;
    style?: {
        background?: string;
        borderRadius?: string;
    }
    currentExpanded?: boolean;
    onExpand?: () => void;
}
export default CollapsibleContainerProps