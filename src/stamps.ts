
export type Category = 'Services' | 'Supplies' | 'Equipment' | 'Markup';
type StampItem = {name: string; filename: string; width?: number; height?: number};

export type Stamps = {
  [K in Category]: StampItem[];
};

export type AnnotationIcons = {
  annotType?: string;
  category: string;
  name: string;
  fileType: string;
  url: string;
  width?: number;
  height?: number;
};

export const stamps = {
  Services: [
    {name: 'Bathroom', filename: 'bathroom-4340.png'},
    {name: 'Dumpster', filename: 'dumpster-534210.png'},
    {name: 'Elevator', filename: 'elevator-1040793.png'},
    {name: 'First Aid', filename: 'first-aid-1870487.png'},
    {name: 'Parking Lot', filename: 'parking-lot-3549401.png'},
    {name: 'Parking', filename: 'parking-134410.png'},
  ],
  Supplies: [
    {name: 'Cement', filename: 'cement-mixer-4930874.png'},
    {name: 'Power', filename: 'power-1196194.png'},
    {name: 'Stocks', filename: 'stocks-5679411.png'},
    {name: 'Water', filename: 'faucet-1484923.png'},
  ],
  Equipment: [
    {name: 'Caravan', filename: 'caravan-587442.png'},
    {name: 'Cherry Picker', filename: 'cherry_picker.png', height: 394, width: 213},
    {name: 'Clamshell Excavation', filename: 'excavator.png', height: 133, width: 60},
    {name: 'Concrete Mixer Truck', filename: 'concrete_mixer_truck.png', height: 94, width: 49},
    {name: 'Concrete Pump', filename: 'concrete_pump.png', height: 94, width: 49},
    {name: 'Crane Truck', filename: 'crane_truck.png', height: 466, width: 136},
    {name: 'Crane', filename: 'crane-2006587.png'},
    {name: 'Crawler Crane', filename: 'crawler_crane.png', height: 129, width: 53},
    {name: 'Dismantling Machine', filename: 'excavator.png', height: 133, width: 60},
    {name: 'Dump Truck', filename: 'dump_truck.png', height: 330, width: 135},
    {name: 'Excavator', filename: 'excavator.png', height: 133, width: 60},
    {name: 'Forklift', filename: 'forklift.png', height: 141, width: 62},
    {name: 'Piling Machine', filename: 'piling_machine.png', height: 111, width: 61},
    {name: 'Rough Terrain Crane', filename: 'rough_terrain_crane.png', height: 86, width: 61},
    {name: 'Tower Crane', filename: 'tower_crane.png', height: 135, width: 60},
    {name: 'Trailer', filename: 'trailer.png', height: 248, width: 78},
    {name: 'Truck', filename: 'truck-1163023.png'},
    {name: 'TruckOne', filename: 'truck.png', height: 312, width: 143},
  ],
  Markup: [
    {name: 'Alert', filename: 'alert-5649200.png'},
    {name: 'Arrow', filename: 'arrow-1920819.png'},
    {name: 'Camera', filename: 'security-camera-1478043.png'},
    {name: 'Caution', filename: 'caution-1242655.png'},
    {name: 'Danger', filename: 'danger-206486.png'},
    {name: 'Fence', filename: 'fence-2373388.png'},
    {name: 'Flag', filename: 'start-3324886.png'},
    {name: 'Pushpin', filename: 'pushpin-5164555.png'},
  ],
} as Stamps;