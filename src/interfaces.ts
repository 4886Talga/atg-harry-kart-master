export type Option = {
    label: string;
    value: string | number
}

type Track = {
    id:number,
    name:string
}

type Start = {
    number: number,
    name: string,
    distribution: number
}

type Favorite = {
    raceId: string,
    legNumber: number,
    start:Start
}

type Horse = {
    name: string
}

type RaceStart = {
    number: number,
    horse: Horse
}

type Race = {
    id:string,
    starts: Array<RaceStart>
}
type Upcoming = {
    id:string,
    newBettingSystem: boolean,
    startTime: string,
    tracks: Array<Track>,
    favorites: Array<Favorite>,
    addOns: Array<string>,
    races:Array<Race>
    bettable:boolean
}

export type Result = {
    id: string,
    tracks: Array<Track>,
    totalToWin: number,
    startTime: string,
    addOns: Array<string>,
}

export interface BetType {
    betType: string,
    upcoming: Array<Upcoming>,
    results:Array<Result>
}

type Payout = {
    systems: number,
jackpot: boolean
}

type boostPayout = {
    correct: number,
    amount: number,multiplier: number
}

type v75Result = {
type: string,
payouts: {
    5: Payout,
    6: Payout,
    7: Payout
}
boostInfo: {
    boostCode: string,
    boostPayouts: Array<boostPayout>,
    resultComplete: boolean
}
}

 type V75 = {
    type: string,
    id: string,
    status: string,
    timestamp: string,
    turnover: number,
    addOns: Array<string>,
    result: v75Result,
    harry: boolean,
    systemCount: number,
    payouts: {
        5: number,
        6:number,
        7:number
    }
    potentialPayoutRaceId: string
 }

 type Winner = {
    number: number,
    odds: number
 }

 type Vinnare = {
    type: string,
    id: string,
    status: string,
    timestamp: string,
    turnover: number,
    result: {
        type: string,
        winners: Array<Winner>
    }
 }

 type Plats = {
    type: string,
    id: string,
    status: string,
    timestamp: string,
    turnover: number,
    result: {
        type: string,
        winners: {first: Array<Winner>, second: Array<Winner>, third: Array<Winner>}
    }
 }

 type Tvilling = {
    type: string,
    id: string,
    status: string,
    timestamp: string,
    turnover: number,
    result: {
        type: string,
        winners: [
            {
            combination: Array<number>,
            odds: number
            }
            ]
    }
 }

 type Horse2 = {
    id: number,
    name: string,
    age: number,
    sex: string,
    record: object,
    trainer: object,
    shoes: object,
    sulky: object,
    money: number,
    color: string,
    homeTrack: object,
    owner: object,
    breeder: object,
    statistics: object,
    pedigree: object
 }
 type Video = {
    mediaId: string,
    timestamp: string
 }

 type Start2 = {
    number: number,
    postPosition: number,
    distance: number,
    horse: Horse2,
    driver: object,
    result: object,
    pools: object,
    videos: Array<Video>
 }

 export type Race2 = {
    id: string,
    name: string,
    date: string,
    number: number,
    distance: number,
    startMethod: string,
    startTime: string,
    scheduledStartTime: string
    prize:string,
    terms: Array<string>,
    sport:string,
    track:{
        id: number,
name: string,
condition: string,
countryCode: string
    },
    result: {victoryMargin:string},
    status: string,
    mediaId: string,
    pools: {
        vinnare: Vinnare,
        plats:Plats,
        tvilling: Tvilling,
        komb:Tvilling,
        trio:Tvilling,
        V75: {
            type: string,
            result: {
            type: string,
            systems: string,
            value: {
            amount: number
            },
            winners: Array<number>,
            reserveOrder: Array<number>
            }
            }
    }
    starts: Start2,
    mergedPools: [
        {
        name: string,
        betTypes: Array<string>
        }
        ] 
 }
export interface getRaces {
    type: string,
    id: string,
status: string,
pools: V75,
races: Array<Race2>,
currentVersion: number,
newBettingSystem: boolean
}