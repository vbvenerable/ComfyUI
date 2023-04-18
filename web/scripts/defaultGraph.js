export const defaultGraph = {
	last_node_id: 9,
	last_link_id: 9,
	nodes: [
		{
			id: 7,
			type: "CLIPTextEncode",
			pos: [413, 389],
			size: { 0: 425.27801513671875, 1: 180.6060791015625 },
			flags: {},
			order: 3,
			mode: 0,
			inputs: [{ name: "clip", type: "CLIP", link: 5 }],
			outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [6], slot_index: 0 }],
			properties: {},
			widgets_values: ["text, watermark"],
		},
		{
			id: 6,
			type: "CLIPTextEncode",
			pos: [415, 186],
			size: { 0: 422.84503173828125, 1: 164.31304931640625 },
			flags: {},
			order: 2,
			mode: 0,
			inputs: [{ name: "clip", type: "CLIP", link: 3 }],
			outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [4], slot_index: 0 }],
			properties: {},
			widgets_values: ["beautiful scenery nature glass bottle landscape, , purple galaxy bottle,"],
		},
		{
			id: 5,
			type: "EmptyLatentImage",
			pos: [473, 609],
			size: { 0: 315, 1: 106 },
			flags: {},
			order: 1,
			mode: 0,
			outputs: [{ name: "LATENT", type: "LATENT", links: [2], slot_index: 0 }],
			properties: {},
			widgets_values: [512, 512, 1],
		},
		{
			id: 3,
			type: "KSampler",
			pos: [863, 186],
			size: { 0: 315, 1: 262 },
			flags: {},
			order: 4,
			mode: 0,
			inputs: [
				{ name: "model", type: "MODEL", link: 1 },
				{ name: "positive", type: "CONDITIONING", link: 4 },
				{ name: "negative", type: "CONDITIONING", link: 6 },
				{ name: "latent_image", type: "LATENT", link: 2 },
			],
			outputs: [{ name: "LATENT", type: "LATENT", links: [7], slot_index: 0 }],
			properties: {},
			widgets_values: [156680208700286, true, 20, 8, "euler", "normal", 1],
		},
		{
			id: 8,
			type: "VAEDecode",
			pos: [1209, 188],
			size: { 0: 210, 1: 46 },
			flags: {},
			order: 5,
			mode: 0,
			inputs: [
				{ name: "samples", type: "LATENT", link: 7 },
				{ name: "vae", type: "VAE", link: 8 },
			],
			outputs: [{ name: "IMAGE", type: "IMAGE", links: [9], slot_index: 0 }],
			properties: {},
		},
		{
			id: 9,
			type: "SaveImage",
			pos: [1451, 189],
			size: { 0: 210, 1: 26 },
			flags: {},
			order: 6,
			mode: 0,
			inputs: [{ name: "images", type: "IMAGE", link: 9 }],
			properties: {},
		},
		{
			id: 4,
			type: "CheckpointLoaderSimple",
			pos: [26, 474],
			size: { 0: 315, 1: 98 },
			flags: {},
			order: 0,
			mode: 0,
			outputs: [
				{ name: "MODEL", type: "MODEL", links: [1], slot_index: 0 },
				{ name: "CLIP", type: "CLIP", links: [3, 5], slot_index: 1 },
				{ name: "VAE", type: "VAE", links: [8], slot_index: 2 },
			],
			properties: {},
			widgets_values: ["v1-5-pruned-emaonly.ckpt"],
		},
	],
	links: [
		[1, 4, 0, 3, 0, "MODEL"],
		[2, 5, 0, 3, 3, "LATENT"],
		[3, 4, 1, 6, 0, "CLIP"],
		[4, 6, 0, 3, 1, "CONDITIONING"],
		[5, 4, 1, 7, 0, "CLIP"],
		[6, 7, 0, 3, 2, "CONDITIONING"],
		[7, 3, 0, 8, 0, "LATENT"],
		[8, 4, 2, 8, 1, "VAE"],
		[9, 8, 0, 9, 0, "IMAGE"],
	],
	groups: [],
	config: {},
	extra: {},
	version: 0.4,
};
export const oneLoRa = {
    "last_node_id": 16,
    "last_link_id": 18,
    "nodes": [
        {
            "id": 6,
            "type": "CLIPTextEncode",
            "pos": [
                505,
                190
            ],
            "size": {
                "0": 422.84503173828125,
                "1": 164.31304931640625
            },
            "flags": {},
            "order": 5,
            "mode": 0,
            "inputs": [
                {
                    "name": "clip",
                    "type": "CLIP",
                    "link": 13
                }
            ],
            "outputs": [
                {
                    "name": "CONDITIONING",
                    "type": "CONDITIONING",
                    "links": [
                        4
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {},
            "widgets_values": [
                "masterpiece, (photorealistic:1.4), best quality, beautiful lighting, (ulzzang-6500:0.4), makima \\(chainsaw man\\), (red hair)+(long braided hair)+(bangs), yellow eyes, golden eyes, (ringed eyes), (white shirt), (necktie), RAW photo, 8k uhd, film grain <lora:makima_offset:1>"
            ]
        },
        {
            "id": 7,
            "type": "CLIPTextEncode",
            "pos": [
                507,
                395
            ],
            "size": {
                "0": 425.27801513671875,
                "1": 180.6060791015625
            },
            "flags": {},
            "order": 4,
            "mode": 0,
            "inputs": [
                {
                    "name": "clip",
                    "type": "CLIP",
                    "link": 12
                }
            ],
            "outputs": [
                {
                    "name": "CONDITIONING",
                    "type": "CONDITIONING",
                    "links": [
                        6
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {},
            "widgets_values": [
                "(painting by bad-artist-anime:0.9), (painting by bad-artist:0.9), watermark, text, error, blurry, jpeg artifacts, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, artist name, (worst quality, low quality:1.4), bad anatomy"
            ]
        },
        {
            "id": 5,
            "type": "EmptyLatentImage",
            "pos": [
                539,
                622
            ],
            "size": {
                "0": 315,
                "1": 106
            },
            "flags": {},
            "order": 0,
            "mode": 0,
            "outputs": [
                {
                    "name": "LATENT",
                    "type": "LATENT",
                    "links": [
                        2
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {},
            "widgets_values": [
                512,
                768,
                1
            ]
        },
        {
            "id": 8,
            "type": "VAEDecode",
            "pos": [
                966,
                230
            ],
            "size": {
                "0": 210,
                "1": 46
            },
            "flags": {
                "collapsed": true
            },
            "order": 7,
            "mode": 0,
            "inputs": [
                {
                    "name": "samples",
                    "type": "LATENT",
                    "link": 7
                },
                {
                    "name": "vae",
                    "type": "VAE",
                    "link": 8
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        9,
                        16
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {}
        },
        {
            "id": 12,
            "type": "ImageUpscaleWithModel",
            "pos": [
                950,
                272
            ],
            "size": {
                "0": 241.79998779296875,
                "1": 46
            },
            "flags": {
                "collapsed": true
            },
            "order": 9,
            "mode": 0,
            "inputs": [
                {
                    "name": "upscale_model",
                    "type": "UPSCALE_MODEL",
                    "link": 15
                },
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 16
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        18
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {}
        },
        {
            "id": 11,
            "type": "UpscaleModelLoader",
            "pos": [
                956,
                316
            ],
            "size": {
                "0": 246.6999969482422,
                "1": 58
            },
            "flags": {
                "collapsed": true
            },
            "order": 1,
            "mode": 0,
            "outputs": [
                {
                    "name": "UPSCALE_MODEL",
                    "type": "UPSCALE_MODEL",
                    "links": [
                        15
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {},
            "widgets_values": [
                "RealESRGAN_x2plus.pth"
            ]
        },
        {
            "id": 9,
            "type": "SaveImage",
            "pos": [
                958,
                358
            ],
            "size": {
                "0": 210,
                "1": 250
            },
            "flags": {},
            "order": 8,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 9
                }
            ],
            "properties": {},
            "widgets_values": [
                "ComfyUI"
            ]
        },
        {
            "id": 14,
            "type": "SaveImage",
            "pos": [
                1195,
                133
            ],
            "size": {
                "0": 567.0999755859375,
                "1": 820
            },
            "flags": {},
            "order": 10,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 18
                }
            ],
            "properties": {},
            "widgets_values": [
                "ComfyUI"
            ]
        },
        {
            "id": 3,
            "type": "KSampler",
            "pos": [
                39,
                474
            ],
            "size": {
                "0": 315,
                "1": 262
            },
            "flags": {},
            "order": 6,
            "mode": 0,
            "inputs": [
                {
                    "name": "model",
                    "type": "MODEL",
                    "link": 14
                },
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "link": 4
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "link": 6
                },
                {
                    "name": "latent_image",
                    "type": "LATENT",
                    "link": 2
                }
            ],
            "outputs": [
                {
                    "name": "LATENT",
                    "type": "LATENT",
                    "links": [
                        7
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {},
            "widgets_values": [
                505070388939866,
                true,
                30,
                9,
                "dpmpp_sde",
                "normal",
                1
            ]
        },
        {
            "id": 4,
            "type": "CheckpointLoaderSimple",
            "pos": [
                46,
                174
            ],
            "size": {
                "0": 315,
                "1": 98
            },
            "flags": {},
            "order": 2,
            "mode": 0,
            "outputs": [
                {
                    "name": "MODEL",
                    "type": "MODEL",
                    "links": [
                        10
                    ],
                    "slot_index": 0
                },
                {
                    "name": "CLIP",
                    "type": "CLIP",
                    "links": [
                        11
                    ],
                    "slot_index": 1
                },
                {
                    "name": "VAE",
                    "type": "VAE",
                    "links": [
                        8
                    ],
                    "slot_index": 2
                }
            ],
            "properties": {},
            "widgets_values": [
                "neverending_dream.safetensors"
            ]
        },
        {
            "id": 10,
            "type": "LoraLoader",
            "pos": [
                43,
                311
            ],
            "size": {
                "0": 315,
                "1": 126
            },
            "flags": {},
            "order": 3,
            "mode": 0,
            "inputs": [
                {
                    "name": "model",
                    "type": "MODEL",
                    "link": 10
                },
                {
                    "name": "clip",
                    "type": "CLIP",
                    "link": 11
                }
            ],
            "outputs": [
                {
                    "name": "MODEL",
                    "type": "MODEL",
                    "links": [
                        14
                    ],
                    "slot_index": 0
                },
                {
                    "name": "CLIP",
                    "type": "CLIP",
                    "links": [
                        12,
                        13
                    ],
                    "slot_index": 1
                }
            ],
            "properties": {},
            "widgets_values": [
                "makima.safetensors",
                1,
                2
            ]
        }
    ],
    "links": [
        [
            2,
            5,
            0,
            3,
            3,
            "LATENT"
        ],
        [
            4,
            6,
            0,
            3,
            1,
            "CONDITIONING"
        ],
        [
            6,
            7,
            0,
            3,
            2,
            "CONDITIONING"
        ],
        [
            7,
            3,
            0,
            8,
            0,
            "LATENT"
        ],
        [
            8,
            4,
            2,
            8,
            1,
            "VAE"
        ],
        [
            9,
            8,
            0,
            9,
            0,
            "IMAGE"
        ],
        [
            10,
            4,
            0,
            10,
            0,
            "MODEL"
        ],
        [
            11,
            4,
            1,
            10,
            1,
            "CLIP"
        ],
        [
            12,
            10,
            1,
            7,
            0,
            "CLIP"
        ],
        [
            13,
            10,
            1,
            6,
            0,
            "CLIP"
        ],
        [
            14,
            10,
            0,
            3,
            0,
            "MODEL"
        ],
        [
            15,
            11,
            0,
            12,
            0,
            "UPSCALE_MODEL"
        ],
        [
            16,
            8,
            0,
            12,
            1,
            "IMAGE"
        ],
        [
            18,
            12,
            0,
            14,
            0,
            "IMAGE"
        ]
    ],
    "groups": [],
    "config": {},
    "extra": {},
    "version": 0.4
}
