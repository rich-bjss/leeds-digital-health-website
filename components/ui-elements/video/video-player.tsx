// @ts-nocheck

//necessary because video react doesn't have declarations for some of the props
//e.g. "disabled" on VolumeMenuButton
//  which I have disabled because that class uses a deprecated feature which will be
//  removed in a future major release of React

"use client"

import "video-react/dist/video-react.css"
import {
    Player,
    ControlBar,
    VolumeMenuButton,
  } from 'video-react';

export default function VideoPlayer({videoUrl}:{videoUrl: string}) {

  return (
    <Player poster="../../../logo.png">
      <source src={videoUrl} />

      <ControlBar>
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>
  )
}
