const clientId = '3t1t2mihkitjs91ii7cfw2u8h9kqwh';  // Your Client ID
const accessToken = '61axe2k0rxme6aigj4la4psh8ze4qe';  // Your new OAuth token

// Fetch loltyler1's profile and stream data
async function getLoltyler1Data() {
    try {
        console.log("Fetching loltyler1's profile...");
        
        const profileUrl = `https://api.twitch.tv/helix/users?login=loltyler1`;
        const profileResponse = await fetch(profileUrl, {
            headers: {
                'Client-ID': clientId,
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!profileResponse.ok) {
            throw new Error(`Error fetching profile data: ${profileResponse.statusText}`);
        }

        const profileData = await profileResponse.json();
        console.log(profileData);  // Log the profile data

        displayProfile(profileData.data[0], 'profile-image-loltyler1', 'profile-description-loltyler1');

        // Fetch loltyler1's stream data
        const streamUrl = `https://api.twitch.tv/helix/streams?user_login=loltyler1`;
        const streamResponse = await fetch(streamUrl, {
            headers: {
                'Client-ID': clientId,
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!streamResponse.ok) {
            throw new Error(`Error fetching stream data: ${streamResponse.statusText}`);
        }

        const streamData = await streamResponse.json();
        console.log(streamData);  // Log the stream data
        displayStream(streamData.data[0], 'stream-list-loltyler1', 'twitch-embed-loltyler1', 'loltyler1');
    } catch (error) {
        console.error('Error fetching loltyler1 data:', error);
    }
}

// Fetch Quantum's profile and stream data
async function getQuantumData() {
    try {
        console.log("Fetching Quantum's profile...");

        const profileUrl = `https://api.twitch.tv/helix/users?login=quantum`;
        const profileResponse = await fetch(profileUrl, {
            headers: {
                'Client-ID': clientId,
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!profileResponse.ok) {
            throw new Error(`Error fetching profile data: ${profileResponse.statusText}`);
        }

        const profileData = await profileResponse.json();
        console.log(profileData);  // Log the profile data

        displayProfile(profileData.data[0], 'profile-image-quantum', 'profile-description-quantum');

        // Fetch Quantum's stream data
        const streamUrl = `https://api.twitch.tv/helix/streams?user_login=quantum`;
        const streamResponse = await fetch(streamUrl, {
            headers: {
                'Client-ID': clientId,
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!streamResponse.ok) {
            throw new Error(`Error fetching stream data: ${streamResponse.statusText}`);
        }

        const streamData = await streamResponse.json();
        console.log(streamData);  // Log the stream data
        displayStream(streamData.data[0], 'stream-list-quantum', 'twitch-embed-quantum', 'quantum');
    } catch (error) {
        console.error('Error fetching Quantum data:', error);
    }
}

// Functions for displayProfile and displayStream
// Embed the Twitch player
function embedTwitchPlayer(embedId, channelName) {
    new Twitch.Embed(embedId, {
        width: "100%",
        height: "600",
        channel: channelName,
        layout: "video",
        autoplay: false
    });
}

// Display profile data
function displayProfile(profile, profileImageId, profileDescId) {
    const profileImage = document.getElementById(profileImageId);
    const profileDescription = document.getElementById(profileDescId);
    profileImage.src = profile.profile_image_url;
    profileDescription.textContent = profile.description || 'No description available.';
}

// Display stream data
function displayStream(stream, streamListId, embedId, channelName) {
    const streamList = document.getElementById(streamListId);
    if (stream) {
        const listItem = document.createElement('li');
        const streamTitle = `${stream.user_name}: ${stream.title}`;
        const streamUrl = `https://www.twitch.tv/${stream.user_name}`;
        const viewerCount = `Viewers: ${stream.viewer_count}`;

        const link = document.createElement('a');
        link.href = streamUrl;
        link.target = '_blank';
        link.textContent = streamTitle;

        const viewers = document.createElement('p');
        viewers.textContent = viewerCount;

        listItem.appendChild(link);
        listItem.appendChild(viewers);
        streamList.appendChild(listItem);

        // Embed the Twitch player
        embedTwitchPlayer(embedId, channelName);
    } else {
        const offlineMessage = document.createElement('li');
        offlineMessage.textContent = `${channelName} is currently offline.`;
        streamList.appendChild(offlineMessage);
    }
}

// Fetch loltyler1's and Quantum's data on page load
getLoltyler1Data();
getQuantumData();
