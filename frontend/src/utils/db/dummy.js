import React from 'react'
export const POSTS = [
	{
		_id: "1",
		text: "Did You know Microsoft is switching from typescript to GO woah 😍",
		img: "/posts/post1.png",
		user: {
			username: "icancode",
			profileImg: "/avatars/boy1.png",
			fullName: "Code Master",
		},
		comments: [
			{
				_id: "1",
				text: "Really? Thats so exciting",
				user: {
					username: "janedoe",
					profileImg: "/avatars/girl1.png",
					fullName: "Jane Doe",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "2",
		text: "How you guys doing? 😊",
		user: {
			username: "johndoe",
			profileImg: "/avatars/boy2.png",
			fullName: "John Doe",
		},
		comments: [
			{
				_id: "1",
				text: "Really? Thats so exciting",
				user: {
					username: "janedoe",
					profileImg: "/avatars/girl2.png",
					fullName: "Jane Doe",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "3",
		text: "Lets codeeee. 🚀",
		img: "/posts/post2.png",
		user: {
			username: "johndoe",
			profileImg: "/avatars/boy3.png",
			fullName: "John Doe",
		},
		comments: [],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894", "6658s895", "6658s896"],
	},
	{
		_id: "4",
		text: "I'm starting my WEB3 journey this week. Any tips? 🤔",
		img: "/posts/post3.png",
		user: {
			username: "icancode",
			profileImg: "/avatars/boy3.png",
			fullName: "Code Master",
		},
		comments: [
			{
				_id: "1",
				text: "Really? Thats so exciting",
				user: {
					username: "janedoe",
					profileImg: "/avatars/girl3.png",
					fullName: "Jane Doe",
				},
			},
		],
		likes: [
			"6658s891",
			"6658s892",
			"6658s893",
			"6658s894",
			"6658s895",
			"6658s896",
			"6658s897",
			"6658s898",
			"6658s899",
		],
	},
];

export const USERS_FOR_RIGHT_PANEL = [
	{
		_id: "1",
		fullName: "John Doe",
		username: "johndoe",
		profileImg: "/avatars/boy2.png",
	},
	{
		_id: "2",
		fullName: "Code Master",
		username: "icancode",
		profileImg: "/avatars/girl1.png",
	},
	{
		_id: "3",
		fullName: "Bob Doe",
		username: "bobdoe",
		profileImg: "/avatars/boy3.png",
	},
	{
		_id: "4",
		fullName: "Daisy Doe",
		username: "daisydoe",
		profileImg: "/avatars/girl2.png",
	},
];