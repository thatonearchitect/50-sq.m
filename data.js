var APP_DATA = {
  "scenes": [
    {
      "id": "0-enterance",
      "name": "enterance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.171028203865692,
          "pitch": 0.5802996676095322,
          "rotation": 0,
          "target": "2-bedroom"
        },
        {
          "yaw": -1.9822933387628758,
          "pitch": 0.26207336654979585,
          "rotation": 0,
          "target": "3-bathroom"
        },
        {
          "yaw": 0.11412279479878862,
          "pitch": 0.6965953656048498,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1238449482925574,
          "pitch": 0.18625653431479705,
          "rotation": 0,
          "target": "2-bedroom"
        },
        {
          "yaw": -2.6496497907632364,
          "pitch": 0.19397529092950627,
          "rotation": 0,
          "target": "0-enterance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom",
      "name": "bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6340123961887816,
          "pitch": 0.6333389175970385,
          "rotation": 0,
          "target": "0-enterance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.279763597637924,
          "pitch": 0.26863228292905994,
          "rotation": 0,
          "target": "0-enterance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
