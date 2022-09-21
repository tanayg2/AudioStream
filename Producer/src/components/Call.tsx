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

    // Create local stream requesting access to video and audio
    const localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
    });

    // Push tracks from local stream to peer connection
    localStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localStream);
     });
}