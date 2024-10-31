export enum AnswerOption {
  Left,
  Right,
}

export interface LevelData {
  title: string;
  levelText: string;
  leftImage: string;
  rightImage: string;
  correctAnswer: AnswerOption;
  reason: string;
  points: number;
}

const GameData: LevelData[] = [
  {
    title: `Which is the correct Discord logo?`,
    levelText: `Intro: 1 / 5`,
    leftImage: `/levels/Intro_1_Left.png`,
    rightImage: `/levels/Intro_1_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Modified eyes and scale on Clyde, adjustments to wordmark`,
    points: 10,
  },
  {
    title: `Which blurple is 5865F2?`,
    levelText: `Intro: 2 / 5`,
    leftImage: `/levels/Intro_2_Left.png`,
    rightImage: `/levels/Intro_2_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Left is #4B56E9`,
    points: 10,
  },
  {
    title: `Which Wumpus is cozier?`,
    levelText: `Intro: 3 / 5`,
    leftImage: `/levels/Intro_3_Left.png`,
    rightImage: `/levels/Intro_3_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Angry eyes and mouth`,
    points: 10,
  },
  {
    title: `What is Discord’s design system named?`,
    levelText: `Intro: 4 / 5`,
    leftImage: `/levels/Intro_4_Left.png`,
    rightImage: `/levels/Intro_4_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `I don’t know a Bruce`,
    points: 10,
  },
  {
    title: `Which squircle is centered?`,
    levelText: `Intro: 5 / 5`,
    leftImage: `/levels/Intro_5_Left.png`,
    rightImage: `/levels/Intro_5_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Slightly up and to the left`,
    points: 10,
  },
  {
    title: `Which is correct?`,
    levelText: `Easy: 1 / 10`,
    leftImage: `/levels/Easy_1_Left.png`,
    rightImage: `/levels/Easy_1_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Incorrect font and text color`,
    points: 25,
  },
  {
    title: `Which is correct?`,
    levelText: `Easy: 2 / 10`,
    leftImage: `/levels/Easy_2_Left.png`,
    rightImage: `/levels/Easy_2_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Rounded corners on message input`,
    points: 25,
  },
  {
    title: `Which is correct?`,
    levelText: `Easy: 3 / 10`,
    leftImage: `/levels/Easy_3_Left.png`,
    rightImage: `/levels/Easy_3_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Incorrect padding, content sitting on bottom of container`,
    points: 25,
  },
  {
    title: `Which is correct?`,
    levelText: `Easy: 4 / 10`,
    leftImage: `/levels/Easy_4_Left.png`,
    rightImage: `/levels/Easy_4_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Inaccessible text color`,
    points: 25,
  },
  {
    title: `Which is correct?`,
    levelText: `Easy: 5 / 10`,
    leftImage: `/levels/Easy_5_Left.png`,
    rightImage: `/levels/Easy_5_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Inconsistent padding in container`,
    points: 25,
  },
  {
    title: `Which is correct?`,
    levelText: `Easy: 6 / 10`,
    leftImage: `/levels/Easy_6_Left.png`,
    rightImage: `/levels/Easy_6_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Actions spacing`,
    points: 25,
  },
  {
    title: `Which is correct?`,
    levelText: `Easy: 7 / 10`,
    leftImage: `/levels/Easy_7_Left.png`,
    rightImage: `/levels/Easy_7_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Font weight`,
    points: 25,
  },
  {
    title: `Which is correct?`,
    levelText: `Easy: 8 / 10`,
    leftImage: `/levels/Easy_8_Left.png`,
    rightImage: `/levels/Easy_8_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Font weight`,
    points: 25,
  },
  {
    title: `Which is correct?`,
    levelText: `Easy: 9 / 10`,
    leftImage: `/levels/Easy_9_Left.png`,
    rightImage: `/levels/Easy_9_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Button padding on edge of container `,
    points: 25,
  },
  {
    title: `Which is correct?`,
    levelText: `Easy: 10 / 10`,
    leftImage: `/levels/Easy_10_Left.png`,
    rightImage: `/levels/Easy_10_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Icon alignment, rotation`,
    points: 25,
  },
  {
    title: `Which is correct?`,
    levelText: `Medium: 1 / 10`,
    leftImage: `/levels/Medium_1_Left.png`,
    rightImage: `/levels/Medium_1_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Incorrect font weight and color`,
    points: 30,
  },
  {
    title: `Which is correct?`,
    levelText: `Medium: 2 / 10`,
    leftImage: `/levels/Medium_2_Left.png`,
    rightImage: `/levels/Medium_2_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Incorrect padding on row items`,
    points: 30,
  },
  {
    title: `Which is correct?`,
    levelText: `Medium: 3 / 10`,
    leftImage: `/levels/Medium_3_Left.png`,
    rightImage: `/levels/Medium_3_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Incorrect button styling `,
    points: 30,
  },
  {
    title: `Which is correct?`,
    levelText: `Medium: 4 / 10`,
    leftImage: `/levels/Medium_4_Left.png`,
    rightImage: `/levels/Medium_4_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Left/Right padding missing`,
    points: 30,
  },
  {
    title: `Which is correct?`,
    levelText: `Medium: 5 / 10`,
    leftImage: `/levels/Medium_5_Left.png`,
    rightImage: `/levels/Medium_5_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Incorrect color for button backgrounds`,
    points: 30,
  },
  {
    title: `Which is correct?`,
    levelText: `Medium: 6 / 10`,
    leftImage: `/levels/Medium_6_Left.png`,
    rightImage: `/levels/Medium_6_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Incorrect corner radius on bottom edge of image`,
    points: 30,
  },
  {
    title: `Which is correct?`,
    levelText: `Medium: 7 / 10`,
    leftImage: `/levels/Medium_7_Left.png`,
    rightImage: `/levels/Medium_7_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Incorrect padding between heading and body copy`,
    points: 30,
  },
  {
    title: `Which is correct?`,
    levelText: `Medium: 8 / 10`,
    leftImage: `/levels/Medium_8_Left.png`,
    rightImage: `/levels/Medium_8_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Incorrect padding between heading and body copy`,
    points: 30,
  },
  {
    title: `Which is correct?`,
    levelText: `Medium: 9 / 10`,
    leftImage: `/levels/Medium_9_Left.png`,
    rightImage: `/levels/Medium_9_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Incorrect icon colors`,
    points: 30,
  },
  {
    title: `Which is correct?`,
    levelText: `Medium: 10 / 10`,
    leftImage: `/levels/Medium_10_Left.png`,
    rightImage: `/levels/Medium_10_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Incorrect icon colors`,
    points: 30,
  },
  {
    title: `Which is correct?`,
    levelText: `Hard: 1 / 10`,
    leftImage: `/levels/Hard_1_Left.png`,
    rightImage: `/levels/Hard_1_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Incorrect left/right padding on icons`,
    points: 40,
  },
  {
    title: `Which is correct?`,
    levelText: `Hard: 2 / 10`,
    leftImage: `/levels/Hard_2_Left.png`,
    rightImage: `/levels/Hard_2_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Incorrect font color and spacing `,
    points: 40,
  },
  {
    title: `Which is correct?`,
    levelText: `Hard: 3 / 10`,
    leftImage: `/levels/Hard_3_Left.png`,
    rightImage: `/levels/Hard_3_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Apps logo updownside`,
    points: 40,
  },
  {
    title: `Which is correct?`,
    levelText: `Hard: 4 / 10`,
    leftImage: `/levels/Hard_4_Left.png`,
    rightImage: `/levels/Hard_4_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Status indicator color`,
    points: 40,
  },
  {
    title: `Which is correct?`,
    levelText: `Hard: 5 / 10`,
    leftImage: `/levels/Hard_5_Left.png`,
    rightImage: `/levels/Hard_5_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Padding + color on indicator for Member count `,
    points: 40,
  },
  {
    title: `Which is correct?`,
    levelText: `Hard: 6 / 10`,
    leftImage: `/levels/Hard_6_Left.png`,
    rightImage: `/levels/Hard_6_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Incorrect font weight on @mention `,
    points: 40,
  },
  {
    title: `Which is correct?`,
    levelText: `Hard: 7 / 10`,
    leftImage: `/levels/Hard_7_Left.png`,
    rightImage: `/levels/Hard_7_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Incorrect font sizing + weight in server attribution text`,
    points: 40,
  },
  {
    title: `Which is correct?`,
    levelText: `Hard: 8 / 10`,
    leftImage: `/levels/Hard_8_Left.png`,
    rightImage: `/levels/Hard_8_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Incorrect font colors `,
    points: 40,
  },
  {
    title: `Which is correct?`,
    levelText: `Hard: 9 / 10`,
    leftImage: `/levels/Hard_9_Left.png`,
    rightImage: `/levels/Hard_9_Right.png`,
    correctAnswer: AnswerOption.Right,
    reason: `Incorrect alignment on emoji suggestions`,
    points: 40,
  },
  {
    title: `Which is correct?`,
    levelText: `Hard: 10 / 10`,
    leftImage: `/levels/Hard_10_Left.png`,
    rightImage: `/levels/Hard_10_Right.png`,
    correctAnswer: AnswerOption.Left,
    reason: `Incorrect spacing between buttons`,
    points: 40,
  },
];

export default GameData;