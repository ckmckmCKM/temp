import battleAni from "./RedBlackBattleAni";

export const fapaiTime = 0.15; //发每张牌的时间
export const turnCardTime = 0.05; //翻开每张牌的时间

/**
 * @param 对战动画初速度
 * @param 对战动画加速度
 */
export const battleAniSpeed = {
    speed: 7,
    spee_add: 1.5,
};

/**
 * @param chip_id对应的筹码数值
 */
export const chipId = [1, 10, 50, 100, 500];

/**
 * @param 开始和停止动画中间停滞时间
 */
export const startDelayTime = 1;

//-------------------------------------self------------
/**
 * @param 设置等面板的展示类型
 */
export enum showPanelType {
    scale = 0,
    moveLeft,
};

/**
 * @param 设置等面板对应的下标类型
 * @param set_help_playerList_startBet_stopBet_battleAni
 * @param waitNext_details
 */
export enum showPanelIdType {
    set = 0,
    help,
    playerList,
    startBet,
    stopBet,
    battleAni,//对战动画
    waitNext,
    details,//详情
    quanquan,//等待加载的圈圈
};

/**
 * @param black_red_lucky所有区域
 */
export enum allArea {
    red = 0,
    black,
    lucky
};

// /**
//  * @param black_red_lucky所有区域的数据类型
//  */
// export interface areaDataType {
//     other: number;
//     self: number;
//     other_chipArr: cc.Node[];
//     self_chipArr: cc.Node[];
// };

/**
 * @param mp3数组对应id
 */
export enum AudioType {
	DanZhang = 0, //单张
	DuiZi,//对子
	ShunZi,//顺子
	JinHua,//金花
	ShunJin,//顺金
    BaoZi,//豹子
    Bg,
    FanPai,
    JieSuanChouMa,
    KaisShiXiaZhu,
    QianZou,
    RuChang,
    TingZhiXiaZhu,
    XiaZhu1,
    XiaZhu2
};

/**
 * @param 所有牌型
 */
export enum cardType {
	Normal = 0,
	DanZhang = 1, //单张
	DuiZi = 2,//对子
	ShunZi = 3,//顺子
	JinHua = 4,//金花
	ShunJin = 5,//顺金
	BaoZi = 6,//豹子
};
/**
 * @param 牌的字A(2~A) 牌的花色
 */
export const cardData = {
    characters: ["","","(2)","(3)","(4)","(5)","(6)","(7)","(8)","(9)","(10)","(11)","(12)","(13)","(1)",],
    flowerColor: ["","club_ ", "diamond_ ", "heart_ ", "spade_ "],
};

/**
 * @param 玩家座位id 1开始
 */
export enum playerSeatId {
    player_left_1 = 0,
    player_left_2 = 1,
    player_left_3 = 2,
    player_right_1 = 3,
    player_right_2 = 4,
    player_right_3 = 5,
    player_self = 6,
    player_other = 7,
};

/**
 * @param 牌的字2~A
 */
export enum cardCharacterType {
    character_2 = 2,
    character_3 = 3,
    character_4 = 4,
    character_5 = 5,
    character_6 = 6,
    character_7 = 7,
    character_8 = 8,
    character_9 = 9,
    character_10 = 10,
    character_J = 11,
    character_Q = 12,
    character_K = 13,
    character_A = 14,
};

/**
 * @param 牌的花色 梅花（Club） 、黑桃（Spade）、红桃（Heart）、方块（Diamond）
 */
export enum cardFlowerColor {
    club = 1, //梅花
    diamond = 2, //方块
    heart = 3, //红桃
    spade = 4, //黑桃
};
/**
 * @param 解析服务器胜利的id win 1红 2黑
 */
export const winId = [0, 1, 0]; 
export const redBlackLuck = [1, 0, 2]; 