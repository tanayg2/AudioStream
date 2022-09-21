import React from 'react';

const servers: RTCConfiguration = {
    iceServers: [
        {
            urls: [
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
            ],
        },
    ],
    iceCandidatePoolSize: 10,
}

async function Call() {

    const peerConnection = new RTCPeerConnection(servers);
    peerConnection.addEventListener("icecandidate", (event) => {
        if (event.candidate) {
            //send event candidate to signalling server (website api)
        }
    });
    
    // Create remote stream using the MediaStream interface
    const remoteStream = new MediaStream();

    // Pull tracks from remote stream, add to video stream
    peerConnection.addEventListener("track", (event) => {
        event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
        });
    });
}