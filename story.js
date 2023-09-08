var story = {
  "currentScene": "awaken",
  "awaken": {
    "title": "Awakening",
    "story": "You have waken from a deep sleep, only to find darkness as you open your eyes. You do not quite remember who you are, where you are, nor why you are here. You can barely remember your own name name -- it almost feels foreign in your mind. You can slightly make out the shape of long, vertical bars in front of you. You were in a prison cell.",
    "choices": [
      {
        "choice": "Call out, \"Is anyone there?\" ",
        "destination": "cellNeighbor"
      },
      {
        "choice": "You try to let your eyes adjust to the light so you can see better.",
        "destination": "viewCell"
      }
    ]
  },
  "cellNeighbor": {
    "title": "The Stranger",
    "story": "Your hear a man to your left cough in response, and a slight clanking sound as the stranger moves around a bit in his cell. \"Depends on who is asking.\" The stranger says.",
    "choices": [
      {
        "choice": "You choose to not respond. You sit there idly.",
        "destination": "angryMan"
      },
      {
        "choice": "\"I do not know who it is asking,\" you reply honestly. \"Why does it matter?\"",
        "destination": "okMan"
      },
      {
        "choice": "\"I think my name is YOUR NAME,\" you respond,\"why are we",
        "destination": "okMan"
      }
    ]
  },
  "viewCell": {
    "title": "Your Cell",
    "story": "Your eyes adjust. You can discern that you are in a small cell. There is barely enough room in it to stretch the length of your arms or legs. On the floor of your cell, underneath you, is brown matted hay. The hay is damp and smells like manure.You notice that there is a small rectangular window on the wall parallel to the bars of the cell. Here, there is a faint shimmer of moonlight beaming.",
    "choices": [
      {
        "choice": "You start to sob uncontrollably. These sobs are deep, loud heaves of grief escaping from you. You are confused, and sad, and frustrated. Why do you not remember what happened? You are the embodiment of self-pity.",
        "destination": "angryMan"
      },
      {
        "choice": "You look around further and follow the faint beam of the moonlight.",
        "destination": "oohShiny"
      }
    ]
  },
  "angryMan": {
    "title": "The Angered Stranger",
    "story": "The stranger grunts once more. You may be imagining that the grunt sounded more forceful, whereas the grunt earlier sounded friendly, this one sounded full of anger and rage. The brick beside your head suddenly moves backwards and into the wall. In its place is a large muscled hand. \"You think you are funny?\"",
    "choices": [
      {
        "choice": "This is a bit of an over reaction, you thought. And then you told the strange just as much.",
        "destination": "strangerKill"
      }
    ]
  },
  "okMan": {
    "title": "You are dead",
    "story": "Quicker than you can react, the brick comes back through the wall and hits you in the head. GAME OVER.",
    "defaultDestination": "awaken",
    "buttonText": "Retry."
  },
  "oohShiny": {
    "title": "You are dead",
    "story": "Quicker than you can react, the brick comes back through the wall and hits you in the head. GAME OVER.",
    "defaultDestination": "awaken",
    "buttonText": "Retry."
  },
  "strangerKill": {
    "title": "You are dead",
    "story": "Quicker than you can react, the brick comes back through the wall and hits you in the head. GAME OVER.",
    "defaultDestination": "awaken",
    "buttonText": "Retry."
  }
}
