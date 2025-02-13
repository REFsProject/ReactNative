

const profiles: Record<number, {
    name: string,
    profilePicture: string,
    profileLink: string,
    chatConversationId: string,
    status: string,
    lastMessage: string,
    lastUpdated: string
}> = {
    123456: {
        name: "John Doe",
        profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
        profileLink: "https://socialmedia.com/johndoe",
        chatConversationId: "12345abcde",
        status: "Online",
        lastMessage: "Hey, how's it going?",
        lastUpdated: "2025-01-20T10:30:00Z"
    },
    123457: {
        name: "Jane Smith",
        profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
        profileLink: "https://socialmedia.com/janesmith",
        chatConversationId: "12345abcdf",
        status: "Offline",
        lastMessage: "See you soon!",
        lastUpdated: "2025-01-19T22:45:00Z"
    },
    123458: {
        name: "Alice Johnson",
        profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
        profileLink: "https://socialmedia.com/alicejohnson",
        chatConversationId: "12345abcfg",
        status: "Online",
        lastMessage: "Let's meet for coffee!",
        lastUpdated: "2025-01-20T11:00:00Z"
    },
    123459: {
        name: "Bob Brown",
        profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
        profileLink: "https://socialmedia.com/bobbrown",
        chatConversationId: "12345abchg",
        status: "Online",
        lastMessage: "Got your message!",
        lastUpdated: "2025-01-20T10:15:00Z"
    },
    123460: {
        name: "Charlie Davis",
        profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
        profileLink: "https://socialmedia.com/charliedavis",
        chatConversationId: "12345abcij",
        status: "Offline",
        lastMessage: "Talk to you later!",
        lastUpdated: "2025-01-19T23:00:00Z"
    },
    123461: {
        name: "David Williams",
        profilePicture: "https://randomuser.me/api/portraits/men/6.jpg",
        profileLink: "https://socialmedia.com/davidwilliams",
        chatConversationId: "12345abcfh",
        status: "Online",
        lastMessage: "I'm busy right now!",
        lastUpdated: "2025-01-20T09:45:00Z"
    },
    123462: {
        name: "Eva Martinez",
        profilePicture: "https://randomuser.me/api/portraits/women/7.jpg",
        profileLink: "https://socialmedia.com/evamartinez",
        chatConversationId: "12345abclm",
        status: "Offline",
        lastMessage: "I'll reply tomorrow!",
        lastUpdated: "2025-01-19T20:30:00Z"
    },
    123463: {
        name: "Frank White",
        profilePicture: "https://randomuser.me/api/portraits/men/8.jpg",
        profileLink: "https://socialmedia.com/frankwhite",
        chatConversationId: "12345abcjl",
        status: "Online",
        lastMessage: "How's everything going?",
        lastUpdated: "2025-01-20T12:00:00Z"
    },
    123464: {
        name: "Grace Lee",
        profilePicture: "https://randomuser.me/api/portraits/women/9.jpg",
        profileLink: "https://socialmedia.com/gracelee",
        chatConversationId: "12345abckn",
        status: "Offline",
        lastMessage: "Let's chat soon!",
        lastUpdated: "2025-01-19T21:15:00Z"
    },
    123465: {
        name: "Henry Harris",
        profilePicture: "https://randomuser.me/api/portraits/men/10.jpg",
        profileLink: "https://socialmedia.com/henryharris",
        chatConversationId: "12345abcmp",
        status: "Online",
        lastMessage: "I'm here if you need me!",
        lastUpdated: "2025-01-20T09:30:00Z"
    },
    123466: {
        name: "Ivy Clark",
        profilePicture: "https://randomuser.me/api/portraits/women/11.jpg",
        profileLink: "https://socialmedia.com/ivyclark",
        chatConversationId: "12345abcpx",
        status: "Offline",
        lastMessage: "Catch you later!",
        lastUpdated: "2025-01-19T23:15:00Z"
    },
    123467: {
        name: "Jack Scott",
        profilePicture: "https://randomuser.me/api/portraits/men/12.jpg",
        profileLink: "https://socialmedia.com/jackscott",
        chatConversationId: "12345abcqs",
        status: "Online",
        lastMessage: "What's up?",
        lastUpdated: "2025-01-20T10:45:00Z"
    },
    123468: {
        name: "Kimberly Green",
        profilePicture: "https://randomuser.me/api/portraits/women/13.jpg",
        profileLink: "https://socialmedia.com/kimberlygreen",
        chatConversationId: "12345abcrt",
        status: "Offline",
        lastMessage: "Goodnight!",
        lastUpdated: "2025-01-19T22:00:00Z"
    },
    123469: {
        name: "Louis King",
        profilePicture: "https://randomuser.me/api/portraits/men/14.jpg",
        profileLink: "https://socialmedia.com/louisking",
        chatConversationId: "12345abcus",
        status: "Online",
        lastMessage: "Let me know when you're free!",
        lastUpdated: "2025-01-20T10:00:00Z"
    },
    123470: {
        name: "Mona Turner",
        profilePicture: "https://randomuser.me/api/portraits/women/15.jpg",
        profileLink: "https://socialmedia.com/monaturner",
        chatConversationId: "12345abcvw",
        status: "Offline",
        lastMessage: "I'll text you later.",
        lastUpdated: "2025-01-19T21:45:00Z"
    },
    123471: {
        name: "Nina Lopez",
        profilePicture: "https://randomuser.me/api/portraits/women/16.jpg",
        profileLink: "https://socialmedia.com/ninalopez",
        chatConversationId: "12345abcxy",
        status: "Online",
        lastMessage: "Just finished work!",
        lastUpdated: "2025-01-20T12:30:00Z"
    },
    123472: {
        name: "Oscar Adams",
        profilePicture: "https://randomuser.me/api/portraits/men/17.jpg",
        profileLink: "https://socialmedia.com/oscaradams",
        chatConversationId: "12345abcyz",
        status: "Offline",
        lastMessage: "Talk soon!",
        lastUpdated: "2025-01-19T23:30:00Z"
    },
    123473: {
        name: "Paul Young",
        profilePicture: "https://randomuser.me/api/portraits/men/18.jpg",
        profileLink: "https://socialmedia.com/paulyoung",
        chatConversationId: "12345abcdz",
        status: "Online",
        lastMessage: "Hope you're doing well!",
        lastUpdated: "2025-01-20T08:00:00Z"
    },
    123474: {
        name: "Quincy Moore",
        profilePicture: "https://randomuser.me/api/portraits/men/19.jpg",
        profileLink: "https://socialmedia.com/quincymoore",
        chatConversationId: "12345abcua",
        status: "Offline",
        lastMessage: "Catch you tomorrow!",
        lastUpdated: "2025-01-19T20:00:00Z"
    },
    123475: {
        name: "Rachel Nelson",
        profilePicture: "https://randomuser.me/api/portraits/women/20.jpg",
        profileLink: "https://socialmedia.com/rachelnelson",
        chatConversationId: "12345abcvb",
        status: "Online",
        lastMessage: "Let's do something fun!",
        lastUpdated: "2025-01-20T11:15:00Z"
    }
};


function getFriendsList()
{

    return profiles;
}