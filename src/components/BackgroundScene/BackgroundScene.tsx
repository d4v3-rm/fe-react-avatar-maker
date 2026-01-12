import { useMotionSafe } from '../../hooks/useMotionSafe';
import type { BackgroundSceneProps } from './BackgroundScene.types';
import './BackgroundScene.scss';

const GRID_VERTICAL_LINES = [
  0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320, 1440, 1560, 1680, 1800, 1920,
];
const GRID_HORIZONTAL_LINES = [0, 90, 180, 270, 360, 450, 540, 630, 720, 810, 900, 990, 1080];

const CONNECTION_LINES: Array<[number, number, number, number]> = [
  [120, 180, 440, 80],
  [440, 80, 700, 240],
  [700, 240, 1040, 140],
  [1040, 140, 1320, 320],
  [1320, 320, 1640, 210],
  [240, 650, 560, 510],
  [560, 510, 820, 700],
  [820, 700, 1140, 580],
  [1140, 580, 1460, 760],
  [360, 930, 740, 810],
  [740, 810, 1100, 960],
  [1100, 960, 1540, 880],
];

const WIREFRAME_POLYGONS = [
  '220,220 380,140 500,220 500,380 380,460 220,380',
  '760,170 940,100 1120,190 1100,380 900,440 740,320',
  '1260,150 1480,160 1620,300 1540,470 1320,440 1200,290',
  '300,560 520,540 660,690 540,850 320,830 220,700',
  '820,520 1040,500 1200,640 1140,840 900,900 760,740',
  '1340,560 1600,560 1760,760 1620,930 1380,920 1240,740',
];

export function BackgroundScene(props: BackgroundSceneProps) {
  void props;
  const motionSafe = useMotionSafe();

  return (
    <div className={`background-scene ${motionSafe ? '' : 'is-static'}`.trim()} aria-hidden="true">
      <div className="background-scene__base" />

      <svg
        className="background-scene__wireframe background-scene__wireframe--grid"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="background-scene__grid-lines">
          {GRID_VERTICAL_LINES.map((x) => (
            <line key={`v-${x}`} x1={x} y1={0} x2={x} y2={1080} />
          ))}
          {GRID_HORIZONTAL_LINES.map((y) => (
            <line key={`h-${y}`} x1={0} y1={y} x2={1920} y2={y} />
          ))}
        </g>

        <g className="background-scene__connections">
          {CONNECTION_LINES.map(([x1, y1, x2, y2], index) => (
            <line
              key={`c-${x1}-${y1}-${x2}-${y2}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              data-index={index}
            />
          ))}
        </g>
      </svg>

      <svg
        className="background-scene__wireframe background-scene__wireframe--shapes"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="background-scene__shape-group">
          {WIREFRAME_POLYGONS.map((points) => (
            <polygon key={points} points={points} />
          ))}

          <polyline points="80,430 270,390 390,520 520,420 700,490" />
          <polyline points="930,260 1110,240 1240,330 1410,250 1600,360" />
          <polyline points="980,860 1130,760 1290,840 1480,760 1700,870" />
        </g>
      </svg>

      <div className="background-scene__vignette" />
    </div>
  );
}
