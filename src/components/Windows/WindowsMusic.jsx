import React, { useState } from 'react';
import { WindowsComponent } from './WindowsComponent';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { Button, Tab, TabBody, Tabs } from 'react95';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;

    .player-controls {
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 300px;
    }

    audio {
        width: 100%;
        margin-top: 10px;
    }
`;

export function WindowsMusic() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.Music) return null;

    const tracks = [
        { id: 1, name: 'Track 1', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
        { id: 2, name: 'Track 2', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
        // Add more tracks
    ];

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioPlayer] = useState(new Audio(tracks[currentTrackIndex].url));

    const playPauseHandler = () => {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        const nextIndex = (currentTrackIndex + 1) % tracks.length;
        setCurrentTrackIndex(nextIndex);
        audioPlayer.src = tracks[nextIndex].url;
        if (isPlaying) audioPlayer.play();
    };

    const prevTrack = () => {
        const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackIndex(prevIndex);
        audioPlayer.src = tracks[prevIndex].url;
        if (isPlaying) audioPlayer.play();
    };

    const [activeTab, setActiveTab] = useState(0);

    return (
        <WindowsComponent title="Music" onClose={() => toggleWindow('Music')}>
            <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
                <Tab value={0}>My Instruments</Tab>
                <Tab value={1}>My Musical Taste</Tab>
            </Tabs>

            <TabBody style={{ height: 300, padding: '10px', overflow: 'auto' }}>
                {activeTab === 0 && (
                    <div>
                        <h3>My Instruments</h3>
                        <ul>
                            <li>Guitar</li>
                            <li>Piano</li>
                            <li>Bass</li>
                            <li>Drums</li>
                            <li>Ukulele</li>
                        </ul>
                    </div>
                )}

                {activeTab === 1 && (
                    <div>
                        <h3>My Musical Taste</h3>
                        <p>I enjoy various music styles: rock, jazz, and electronic music.</p>

                        <PlayerWrapper>
                            <div>
                                <strong>Now Playing: </strong>{tracks[currentTrackIndex].name}
                            </div>

                            <div className="player-controls">
                                <Button onClick={prevTrack}>Previous</Button>
                                <Button onClick={playPauseHandler}>
                                    {isPlaying ? 'Pause' : 'Play'}
                                </Button>
                                <Button onClick={nextTrack}>Next</Button>
                            </div>

                            <audio controls autoPlay>
                                <source src={audioPlayer.src} />
                            </audio>
                        </PlayerWrapper>
                    </div>
                )}
            </TabBody>
        </WindowsComponent>
    );
}
