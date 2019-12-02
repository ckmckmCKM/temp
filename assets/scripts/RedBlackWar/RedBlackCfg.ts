
export const fapaiTime = 0.15; //发每张牌的时间
export const turnCardTime = 0.15; //翻开每张牌的时间

/**
 * @param 对战动画初速度
 * @param 对战动画加速度
 */
export const battleAniSpeed = {
    speed: 7,
    spee_add: 1.5,
};

/**
 * @param chip_id对应的筹码数值 服务器给配置初始化
 */
export const chipId = [];//[100, 1000, 5000, 10000, 50000];//
/**
 * @param chip_id对应的筹码数值 服务器给配置初始化
 */
export const chipColor: cc.Color[] = [cc.color(0, 140, 49), cc.color(0, 69, 140),
    cc.color(143, 79, 0), cc.color(126, 36, 0), cc.color(60, 7, 115), 
    cc.color(125, 125, 125), cc.color(255, 255, 255)];

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
    battleAni = 0,//对战动画
    startBet,
    stopBet,
    waitNext,
    quanquan,//等待加载的圈圈
    playerList,
    details,//详情
    set,
    help,
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
    Bg = 0,
	DanZhang = 1, //单张
	DuiZi = 2,//对子
	ShunZi = 3,//顺子
	JinHua = 4,//金花
	ShunJin = 5,//顺金
    BaoZi = 6,//豹子
    FanPai = 7,
    JieSuanChouMa = 8,
    KaisShiXiaZhu = 9,
    QianZou = 10,
    RuChang = 11,
    TingZhiXiaZhu = 12,
    XiaZhu1 = 13,
    XiaZhu2 = 14,
    daojishi = 15,
    dianji = 16,
    VS = 17,
    Win_m = 18,
    Win_w = 19,
    Number = 20,
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
    flowerColor: ["","diamond_ ", "club_ ", "heart_ ", "spade_ "],
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
 * @param 解析服务器胜利的id win 1红 2黑
 */
export const winId = [0, 1, 0]; 
export const redBlackLuck = [1, 0, 2]; 

export function intToFloatStr(num){
    let _len = 5;
    let _str = num + '';//Math.floor(num) / 100 + '';
    let _strArr = _str.split(".");
    if (_strArr[0].length < _len && _strArr[1]){
        _str = _strArr[0] + "." + _strArr[1].substr(0, _len - _strArr[0].length);
    }
    if (_strArr[1] && _str[_str.length - 1] === "0") {
        for (let i = _str.length - 1; i > 0 && _str[i] !== "."; --i) {
            let _curStr = _str[i];
            if (_curStr === "0") {
                _str = _str.substr(0, i);
                if (_str[i - 1] === ".") {
                    _str = _str.substr(0, i - 1);
                    break;
                }
                if (_str[i - 1] != "0") {
                    break;
                }
            }
        }
    }
    return _str;
}

export function getChipNum(num, isFloat = false) {
    let _num = num / 100;
    let _zi = "";
    if (_num < 10000) {
        if (_num >= 1000 && !isFloat) {
            _num /= 1000;
            return {
                num: Math.floor(_num * 100) / 100,
                zi: "千",
            }
        }
        return {
            num: Math.floor(num) / 100,
            zi: _zi,
        }
    }
    if (_num >= 100000000) {
        _num /= 100000000;
        _zi = "亿";
    } else if (_num >= 10000000 && !isFloat) {
        _num /= 10000000;
        _zi = "千万";
    } else if (_num >= 1000000 && !isFloat) {
        _num /= 1000000;
        _zi = "百万";
    } else if (_num >= 10000) {
        _num /= 10000;
        _zi = "万";
    } else if (_num >= 1000 && !isFloat) {
        _num /= 1000;
        _zi = "千";
    }
    return {
        num: isFloat ? intToFloatStr(_num) : _num,
        zi: _zi,
    };
}

export function setChipColor(node: cc.Node, index, isOut) {
    if (index >= chipColor.length){
        console.warn("index = " + index);
        return;
    }
    if (!chipColor[index]){
        console.warn("index = " + index);
        return;
    }
    if (!isOut) {
        node.color = chipColor[index];
    }
    if (isOut) {
        node.getComponent(cc.LabelOutline).color = chipColor[index];
    }
}

/**
 * @param 牌的花色 梅花（Club） 、黑桃（Spade）、红桃（Heart）、方块（Diamond）
 */
export enum cardFlowerColor {
    diamond = 1, //方块
    club = 2, //梅花
    heart = 3, //红桃
    spade = 4, //黑桃
};