import styled from 'styled-components';
import { GroupBox } from 'react95';

const ScrollableContent = styled.div`
    overflow: auto;
    height: ${({ $height }) => $height || '300px'};
`;

const WindowContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: ${({ $height }) => $height || '500px'};
    padding: ${({ $padding }) => $padding || '0'};
`;

const SectionTitle = styled.h3`
    margin: 0 0 10px 0;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 1px solid #808080;
    padding-bottom: 5px;
`;

const SkillChip = styled.div`
    border: 1px outset #c0c0c0;
    padding: 4px 8px;
    font-size: 11px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const ChipsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
`;

const ProgressTrack = styled.div`
    width: 100%;
    height: ${({ $height }) => $height || '20px'};
    background: white;
    border: 2px inset #c0c0c0;
    position: relative;
    overflow: hidden;
`;

const ProgressFill = styled.div`
    height: 100%;
    background: linear-gradient(90deg, #0080ff 0%, #0060ff 100%);
    width: ${({ $percentage }) => $percentage}%;
    transition: width 1s ease-in-out;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.1) 2px,
            rgba(255, 255, 255, 0.1) 4px
        );
    }
`;

const ProgressLabel = styled.div`
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    margin-top: 5px;
`;

const TwoColumnLayout = styled.div`
    display: flex;
    height: ${({ $height }) => $height || '400px'};
    width: 100%;
`;

const LeftColumn = styled.div`
    flex: 1;
    border-right: 2px inset;
    padding: 10px;
    overflow-y: auto;
`;

const RightColumn = styled.div`
    flex: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
`;

const PlaceholderMessage = styled.div`
    text-align: center;
    font-style: italic;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export {
    ScrollableContent,
    WindowContainer,
    SectionTitle,
    SkillChip,
    ChipsRow,
    ProgressTrack,
    ProgressFill,
    ProgressLabel,
    TwoColumnLayout,
    LeftColumn,
    RightColumn,
    PlaceholderMessage,
};

