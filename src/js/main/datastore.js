// DATASTORE.JS START
let user = {
	id: 0,
	name: "Anish",
	number: "Kuryer name",
	pic: "img/asdsd12f34ASd231.png",
	courierNumber: "+994 50 3332211",
	orderNumber: 'Order No 1'
};

let contactList = [
	{
		id: 0,
		name: "Anish",
		number: "+994 50 3332211",
		pic: "img/asdsd12f34ASd231.png",
		lastSeen: "Apr 29 2018 17:58:02",
		courierNumber: "+994 50 3332211",
		orderNumber: 'Order No 1'
	},
	{
		id: 1,
		name: "Nitin",
		number: "Kuryer name",
		pic: "img/Ass09123asdj9dk0qw.jpg",
		lastSeen: "Apr 29 2018 17:58:02",
		courierNumber: "+994 70 5552233",
		orderNumber: 'Order No 2'
	},
	{
		id: 2,
		name: "Sanjay",
		number: "Kuryer name",
		pic: "img/asd1232ASdas123a.png",
		lastSeen: "Apr 28 2018 19:23:16",
		courierNumber: "+994 70 1112233",
		orderNumber: 'Order No 3'
	},
	{
		id: 3,
		name: "Suvro Mobile",
		number: "+91 98232 63547",
		pic: "img/Alsdk120asdj913jk.jpg",
		lastSeen: "Apr 29 2018 11:16:42",
		courierNumber: "+994 55 44874433",
		orderNumber: 'Order No 4'
	},
	{
		id: 4,
		name: "Dee",
		number: "+91 72781 38213",
		pic: "img/dsaad212312aGEA12ew.png",
		lastSeen: "Apr 27 2018 17:28:10",
		courierNumber: "+994 70 9998833",
		orderNumber: 'Order No 5'
	},
	{
		id: 5,
		name: "Dee",
		number: "+91 72781 38213",
		pic: "img/dsaad212312aGEA12ew.png",
		lastSeen: "Apr 27 2018 17:28:10",
		courierNumber: "+994 70 9998833",
		orderNumber: 'Order No 5'
	},
	{
		id: 6,
		name: "Dee",
		number: "+91 72781 38213",
		pic: "img/dsaad212312aGEA12ew.png",
		lastSeen: "Apr 27 2018 17:28:10",
		courierNumber: "+994 70 9998833",
		orderNumber: 'Order No 5'
	},
	{
		id: 7,
		name: "Dee",
		number: "+91 72781 38213",
		pic: "img/dsaad212312aGEA12ew.png",
		lastSeen: "Apr 27 2018 17:28:10",
		courierNumber: "+994 70 9998833",
		orderNumber: 'Order No 5'
	}
];

let groupList = [
	{
		id: 1,
		name: "Group",
		members: [0, 1, 3],
		pic: "img/0923102932_aPRkoW.jpg",
		orderNumber: "Order No 15"
	},
	{
		id: 2,
		name: "Web Developers",
		members: [0, 2],
		pic: "img/1921231232_Ag1asE.png",
		orderNumber: "Order No 14"
	},
	{
		id: 3,
		name: "notes",
		members: [0,4,5],
		pic: "img/8230192232_asdEWq2.png",
		orderNumber: 'Order No 13'
	},
	{
		id: 4,
		name: "notes",
		members: [0,4,7],
		pic: "img/8230192232_asdEWq2.png",
		orderNumber: 'Order No 12'
	},
	{
		id: 5,
		name: "notes",
		members: [0,3,5],
		pic: "img/8230192232_asdEWq2.png",
		orderNumber: 'Order No 11'
	}
];

// message status - 0:sent, 1:delivered, 2:read

let messages = [
	{
		id: 0,
		sender: 2,
		body: "where are you, buddy?",
		time: "April 25, 2018 13:21:03",
		status: 2,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 1,
		sender: 3,
		body: "at home",
		time: "June 25, 2018 13:22:03",
		status: 2,
		recvId: 2,
		recvIsGroup: true
	},
	{
		id: 2,
		sender: 0,
		body: "how you doin'?",
		time: "April 25, 2018 18:15:23",
		status: 2,
		recvId: 3,
		recvIsGroup: true
	},
	{
		id: 3,
		sender: 3,
		body: "i'm fine...wat abt u?",
		time: "April 25, 2018 21:05:11",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 4,
		sender: 0,
		body: "i'm good too",
		time: "April 26, 2018 09:17:03",
		status: 1,
		recvId: 3,
		recvIsGroup: true
	},
	{
		id: 5,
		sender: 3,
		body: "anyone online?",
		time: "April 27, 2018 18:20:11",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 6,
		sender: 1,
		body: "have you seen infinity war?",
		time: "April 27, 2018 17:23:01",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 0,
		sender: 3,
		body: "are you going to the party tonight?",
		time: "April 27, 2018 08:11:21",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 8,
		sender: 2,
		body: "no, i've some work to do..are you?",
		time: "April 27, 2018 08:22:12",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 9,
		sender: 0,
		body: "yup",
		time: "June 27, 2018 08:31:23",
		status: 1,
		recvId: 2,
		recvIsGroup: true
	},
	{
		id: 10,
		sender: 0,
		body: "if you go to the movie, then give me a call",
		time: "April 27, 2018 22:41:55",
		status: 7,
		recvId: 4,
		recvIsGroup: true
	},
	{
		id: 11,
		sender: 5,
		body: "yeah, i'm online",
		time: "April 28 2018 17:10:21",
		status: 6,
		recvId: 2,
		recvIsGroup: true
	}
];

let MessageUtils = {
	getByGroupId: (groupId) => {
		return messages.filter(msg => msg.recvIsGroup && msg.recvId === groupId);
	},
	getByContactId: (contactId) => {
		return messages.filter(msg => {
			return !msg.recvIsGroup && ((msg.sender === user.id && msg.recvId === contactId) || (msg.sender === contactId && msg.recvId === user.id));
		});
	},
	getMessages: () => {
		return messages;
	},
	changeStatusById: (options) => {
		messages = messages.map((msg) => {
			if (options.isGroup) {
				if (msg.recvIsGroup && msg.recvId === options.id) msg.status = 2;
			} else {
				if (!msg.recvIsGroup && msg.sender === options.id && msg.recvId === user.id) msg.status = 2;
			}
			return msg;
		});
	},
	addMessage: (msg) => {
		msg.id = messages.length + 1;
		messages.push(msg);
	}
};

// DATASTORE.JS END