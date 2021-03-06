export interface Energy{
    potrosuvacka: {
        struja: number,
        parno: number,
        gas: number,
        peleti: number,
        drva: number
    },
    lugjeDomakinstvo: number
  }

  export interface Diet{
    dieta: string,
    frlanjeHrana: number
  }

  export interface Transportation{
    kola: {
        ima: boolean,
        tip: string,
        godina: number
    },
    distanca: {
        avtomobil: number,
        velosiped: number,
        avtobus: number,
        motor: number
    }
  }

  export interface Habits{
    avionPatuvanja: number,
    obleka: {
        patiki: number,
        maica: number,
        jakna: number,
        pantaloni: number
    },
    gjubre: number
  }

  export interface EnergyResult{
    drva: number,
    nafta: number,
    paleti: number,
    parno: number,
    struja: number,
    vkupno: number
  }

  export interface DietResult{
    dieta: number,
    frlanjeHrana: number,
    vkupno: number
  }

  export interface HabitsResult{
    avion: number,
    gjubre: number,
    obleka: number,
    vkupno: number
  }

  export interface TransportResult{
    avtobus: number,
    avtomobil: number,
    motor: number,
    velosiped: number,
    vkupno: number
  }

  export interface Statistika{
    brandNewCar2018: number,
    reduceDoubleFoodWaste: number,
    removeWoodPalets: number,
    switchFromBusToBike: number,
    switchHalfCarForBus: number,
    switchHalfFlightTime: number,
    switchToVegetarian: number,
    tenPercentLessWaste: number,
    vkupno: number
  }
