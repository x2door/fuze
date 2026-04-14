const EDGE_SNAP_PX = 24;
const NEAR_FULL_CROP_RATIO = 0.96;
const CROP_HANDLE_SIZE = 12;
const STORAGE_KEY = "fuse-bead-pattern-studio:v1";

const PALETTE = [
  { id: "see-through", name: "See Through", hex: "#babec6" },
  { id: "white", name: "White", hex: "#f7f7f3" },
  { id: "light-gray", name: "Light Gray", hex: "#bfbcc0" },
  { id: "spanish-gray", name: "Spanish Gray", hex: "#9a9997" },
  { id: "nickel", name: "Nickel", hex: "#757576" },
  { id: "black", name: "Black", hex: "#111113" },
  { id: "cream", name: "Cream", hex: "#f5efcf" },
  { id: "light-khaki", name: "Light Khaki", hex: "#eadf93" },
  { id: "crayellow", name: "Crayellow", hex: "#f2cc2c" },
  { id: "mikado-yellow", name: "Mikado Yellow", hex: "#f3be00" },
  { id: "pastel-orange", name: "Pastel Orange", hex: "#eeaf48" },
  { id: "tiger-moth-orange", name: "Tiger Moth Orange", hex: "#de7314" },
  { id: "lilac-haze", name: "Lilac Haze", hex: "#dcc0df" },
  { id: "starlet-pink", name: "Starlet Pink", hex: "#d8b0d8" },
  { id: "melon", name: "Melon", hex: "#efc4b8" },
  { id: "brink-pink", name: "Brink Pink", hex: "#ecad96" },
  { id: "lavender-rose", name: "Lavender Rose", hex: "#c897c1" },
  { id: "rose-rush-ua-red", name: "Rose Rush UA Red", hex: "#be1b59" },
  { id: "celadon", name: "Celadon", hex: "#a8d39b" },
  { id: "magnesia-bay", name: "Magnesia Bay", hex: "#68b7d9" },
  { id: "blue-celeste", name: "Blue Celeste", hex: "#86bde8" },
  { id: "acapulco-dive", name: "Acapulco Dive", hex: "#6db1c1" },
  { id: "starstruck", name: "Starstruck", hex: "#5c66bc" },
  { id: "cosmic-cobalt", name: "Cosmic Cobalt", hex: "#3f3da0" },
  { id: "orpiment-yellow", name: "Orpiment Yellow", hex: "#f4c77b" },
  { id: "desert-sand", name: "Desert Sand", hex: "#dec3ab" },
  { id: "dry-sea-grass", name: "Dry Sea Grass", hex: "#ccb78a" },
  { id: "komodo-dragon", name: "Komodo Dragon", hex: "#ba9659" },
  { id: "polished-copper", name: "Polished Copper", hex: "#b56f20" },
  { id: "coffee", name: "Coffee", hex: "#835838" },
  { id: "taurus-forest-fern", name: "Taurus Forest Fern", hex: "#65c4b6" },
  { id: "medium-turquoise", name: "Medium Turquoise", hex: "#63bdd3" },
  { id: "orange-crayola-crayon", name: "Orange Crayola Crayon", hex: "#b8d56d" },
  { id: "lightish-green", name: "Lightish Green", hex: "#7bc84d" },
  { id: "pikkoro-green", name: "Pikkoro Green", hex: "#43b63f" },
  { id: "green-ncs", name: "Green NCS", hex: "#2d9b63" },
  { id: "wisteria", name: "Wisteria", hex: "#bdb4df" },
  { id: "bluebell-frost", name: "Bluebell Frost", hex: "#a6a6e1" },
  { id: "lavender", name: "Lavender", hex: "#a27cc8" },
  { id: "iris-orchid", name: "Iris Orchid", hex: "#b05bbf" },
  { id: "royalty-loyalty", name: "Royalty Loyalty", hex: "#a54ab0" },
  { id: "kalish-violet", name: "Kalish Violet", hex: "#6f2ea3" },
  { id: "wish", name: "Wish", hex: "#b7b3e3" },
  { id: "purple-mountains-majesty", name: "Purple Mountains' Majesty", hex: "#a889cb" },
  { id: "litmus", name: "Litmus", hex: "#a4a0df" },
  { id: "blue-iris", name: "Blue Iris", hex: "#7364cc" },
  { id: "indigo", name: "Indigo", hex: "#5a35a0" },
  { id: "persian-indigo", name: "Persian Indigo", hex: "#462d84" },
];

const PERLER_LARGE_TRAY = [
  { id: "perler-lt-white", code: "PL01", name: "White", hex: "#f4f1ea" },
  { id: "perler-lt-black", code: "PL02", name: "Black", hex: "#15161a" },
  { id: "perler-lt-pastel-blue", code: "PL03", name: "Pastel Blue", hex: "#89bce8" },
  { id: "perler-lt-light-green", code: "PL04", name: "Light Green", hex: "#9bd873" },
  { id: "perler-lt-yellow", code: "PL05", name: "Yellow", hex: "#f4d84f" },
  { id: "perler-lt-raspberry", code: "PL06", name: "Raspberry", hex: "#c23979" },
  { id: "perler-lt-pink", code: "PL07", name: "Pink", hex: "#e89ab8" },
  { id: "perler-lt-blush", code: "PL08", name: "Blush", hex: "#f0c8c2" },
  { id: "perler-lt-brown", code: "PL09", name: "Brown", hex: "#6f4a35" },
  { id: "perler-lt-evergreen", code: "PL10", name: "Evergreen", hex: "#2a7857" },
  { id: "perler-lt-parrot-green", code: "PL11", name: "Parrot Green", hex: "#48b84c" },
  { id: "perler-lt-pastel-lavender", code: "PL12", name: "Pastel Lavender", hex: "#cfb9ea" },
  { id: "perler-lt-light-grey", code: "PL13", name: "Light Grey", hex: "#b8bcc5" },
  { id: "perler-lt-prickly-pear", code: "PL14", name: "Prickly Pear", hex: "#c7d85a" },
  { id: "perler-lt-transparent-turquoise", code: "PL15", name: "Transparent Turquoise", hex: "#67cfd6" },
  { id: "perler-lt-plum", code: "PL16", name: "Plum", hex: "#7a4ba8" },
];

const PERLER_SUMMER_TRAY = [
  { id: "perler-st-light-pink", code: "PS01", name: "Light Pink", hex: "#f4c9d7" },
  { id: "perler-st-red", code: "PS02", name: "Red", hex: "#d94b4b" },
  { id: "perler-st-orange", code: "PS03", name: "Orange", hex: "#ec8d2b" },
  { id: "perler-st-cheddar", code: "PS04", name: "Cheddar", hex: "#f0b636" },
  { id: "perler-st-yellow", code: "PS05", name: "Yellow", hex: "#f4d84f" },
  { id: "perler-st-kiwi-lime", code: "PS06", name: "Kiwi Lime", hex: "#9ed94a" },
  { id: "perler-st-dark-green", code: "PS07", name: "Dark Green", hex: "#2e7f46" },
  { id: "perler-st-toothpaste", code: "PS08", name: "Toothpaste", hex: "#71d4d1" },
  { id: "perler-st-turquoise", code: "PS09", name: "Turquoise", hex: "#4ab9c7" },
  { id: "perler-st-pastel-lavender", code: "PS10", name: "Pastel Lavender", hex: "#cfb9ea" },
  { id: "perler-st-purple", code: "PS11", name: "Purple", hex: "#8555bf" },
  { id: "perler-st-butterscotch", code: "PS12", name: "Butterscotch", hex: "#bb7a42" },
  { id: "perler-st-light-brown", code: "PS13", name: "Light Brown", hex: "#ba8a63" },
  { id: "perler-st-sand", code: "PS14", name: "Sand", hex: "#d8be92" },
  { id: "perler-st-white", code: "PS15", name: "White", hex: "#f4f1ea" },
  { id: "perler-st-black", code: "PS16", name: "Black", hex: "#15161a" },
];

const PERLER_NEUTRAL_TRAY = [
  { id: "perler-nt-clear", code: "PN01", name: "Clear", hex: "#cfd5da" },
  { id: "perler-nt-white", code: "PN02", name: "White", hex: "#f4f1ea" },
  { id: "perler-nt-grey", code: "PN03", name: "Grey", hex: "#9fa4ad" },
  { id: "perler-nt-black", code: "PN04", name: "Black", hex: "#15161a" },
  { id: "perler-nt-sand", code: "PN05", name: "Sand", hex: "#d8be92" },
  { id: "perler-nt-tan", code: "PN06", name: "Tan", hex: "#c8a37e" },
  { id: "perler-nt-light-brown", code: "PN07", name: "Light Brown", hex: "#ba8a63" },
  { id: "perler-nt-brown", code: "PN08", name: "Brown", hex: "#6f4a35" },
];

const state = {
  selectedPalettePresetId: "artkal-48",
  mobileView: "setup",
  mobileSetupPreviewMode: "pattern",
  cropToolOpen: false,
  adjustmentApplyTimer: null,
  image: null,
  imageName: "",
  imageWidth: 0,
  imageHeight: 0,
  cropRect: null,
  cropDraftRect: null,
  cropStartPoint: null,
  cropMoveOrigin: null,
  cropPointerOffset: null,
  activePointerId: null,
  cropResizeHandle: null,
  cropResizeAnchor: null,
  sourcePlacement: null,
  activePaletteIds: new Set(PALETTE.map((entry) => entry.id)),
  customPalette: [],
  inventoryByColorId: {},
  pattern: null,
};

const refs = {
  imageUpload: document.getElementById("imageUpload"),
  patternWidth: document.getElementById("patternWidth"),
  patternHeight: document.getElementById("patternHeight"),
  lockAspect: document.getElementById("lockAspect"),
  showSymbols: document.getElementById("showSymbols"),
  mirrorPattern: document.getElementById("mirrorPattern"),
  backgroundMode: document.getElementById("backgroundMode"),
  ditherStrength: document.getElementById("ditherStrength"),
  matchingMode: document.getElementById("matchingMode"),
  inventoryBalancing: document.getElementById("inventoryBalancing"),
  hueShift: document.getElementById("hueShift"),
  hueShiftValue: document.getElementById("hueShiftValue"),
  brightnessBoost: document.getElementById("brightnessBoost"),
  brightnessValue: document.getElementById("brightnessValue"),
  saturationBoost: document.getElementById("saturationBoost"),
  saturationValue: document.getElementById("saturationValue"),
  shadowLift: document.getElementById("shadowLift"),
  shadowLiftValue: document.getElementById("shadowLiftValue"),
  highlightRecovery: document.getElementById("highlightRecovery"),
  highlightRecoveryValue: document.getElementById("highlightRecoveryValue"),
  resetAdjustmentsBtn: document.getElementById("resetAdjustmentsBtn"),
  palettePreset: document.getElementById("palettePreset"),
  palettePresetNote: document.getElementById("palettePresetNote"),
  generateBtn: document.getElementById("generateBtn"),
  downloadBtn: document.getElementById("downloadBtn"),
  exportSheetBtn: document.getElementById("exportSheetBtn"),
  sourcePreviewCard: document.getElementById("sourcePreviewCard"),
  openCropToolBtn: document.getElementById("openCropToolBtn"),
  saveCropBtn: document.getElementById("saveCropBtn"),
  cancelCropBtn: document.getElementById("cancelCropBtn"),
  resetCropBtn: document.getElementById("resetCropBtn"),
  cropMeta: document.getElementById("cropMeta"),
  cropToolBackdrop: document.getElementById("cropToolBackdrop"),
  customColorCode: document.getElementById("customColorCode"),
  customColorName: document.getElementById("customColorName"),
  customColorHex: document.getElementById("customColorHex"),
  customColorPicker: document.getElementById("customColorPicker"),
  addCustomColorBtn: document.getElementById("addCustomColorBtn"),
  resetPaletteBtn: document.getElementById("resetPaletteBtn"),
  paletteGrid: document.getElementById("paletteGrid"),
  activePaletteCount: document.getElementById("activePaletteCount"),
  statsGrid: document.getElementById("statsGrid"),
  sourceCanvas: document.getElementById("sourceCanvas"),
  patternCanvas: document.getElementById("patternCanvas"),
  mobilePreviewCanvas: document.getElementById("mobilePreviewCanvas"),
  mobilePreviewMeta: document.getElementById("mobilePreviewMeta"),
  mobilePreviewPatternBtn: document.getElementById("mobilePreviewPatternBtn"),
  mobilePreviewSourceBtn: document.getElementById("mobilePreviewSourceBtn"),
  imageMeta: document.getElementById("imageMeta"),
  patternMeta: document.getElementById("patternMeta"),
  legendMeta: document.getElementById("legendMeta"),
  instructionMeta: document.getElementById("instructionMeta"),
  legendList: document.getElementById("legendList"),
  instructionList: document.getElementById("instructionList"),
  controlsPanel: document.querySelector(".controls-panel"),
  outputPanel: document.querySelector(".output-panel"),
  mobileViewPanels: [...document.querySelectorAll("[data-mobile-view-panel]")],
  mobileViewButtons: [...document.querySelectorAll("[data-mobile-view-trigger]")],
};

const sourceCtx = refs.sourceCanvas.getContext("2d");
const patternCtx = refs.patternCanvas.getContext("2d");
const mobilePreviewCtx = refs.mobilePreviewCanvas.getContext("2d");

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const isMobileLayout = () => window.innerWidth <= 720;
const isCropEditingEnabled = () => state.cropToolOpen;

const hexToRgb = (hex) => {
  const normalized = hex.replace("#", "");
  const value = Number.parseInt(normalized, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
};

const srgbToLinear = (value) => {
  const normalized = value / 255;
  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
};

const rgbToLab = ({ r, g, b }) => {
  const red = srgbToLinear(r);
  const green = srgbToLinear(g);
  const blue = srgbToLinear(b);

  const x = (red * 0.4124 + green * 0.3576 + blue * 0.1805) / 0.95047;
  const y = (red * 0.2126 + green * 0.7152 + blue * 0.0722) / 1;
  const z = (red * 0.0193 + green * 0.1192 + blue * 0.9505) / 1.08883;

  const transform = (value) =>
    value > 0.008856 ? value ** (1 / 3) : 7.787 * value + 16 / 116;

  const fx = transform(x);
  const fy = transform(y);
  const fz = transform(z);

  return {
    l: 116 * fy - 16,
    a: 500 * (fx - fy),
    b: 200 * (fy - fz),
  };
};

const createPaletteEntry = (entry, fallbackCode) => {
  const rgb = hexToRgb(entry.hex);
  const lab = rgbToLab(rgb);
  return {
    ...entry,
    code: entry.code || fallbackCode,
    rgb,
    lab,
    chroma: Math.sqrt(lab.a * lab.a + lab.b * lab.b),
  };
};

const artkalStyle48Entries = PALETTE.map((entry, index) =>
  createPaletteEntry(entry, String(index + 1).padStart(2, "0")),
);

const PALETTE_PRESETS = [
  {
    id: "artkal-48",
    name: "Artkal-style 48 color chart",
    note: "Good default and close to the chart you uploaded.",
    entries: artkalStyle48Entries,
  },
  {
    id: "perler-large-tray",
    name: "Perler Mini Large Tray (16)",
    note: "Mini Perler tray with 16 colors for general-purpose mini projects.",
    entries: PERLER_LARGE_TRAY.map((entry) => createPaletteEntry(entry, entry.code)),
  },
  {
    id: "perler-summer-tray",
    name: "Perler Summer Mini Tray (16)",
    note: "Warm and bright mini tray for colorful projects and seasonal art.",
    entries: PERLER_SUMMER_TRAY.map((entry) => createPaletteEntry(entry, entry.code)),
  },
  {
    id: "perler-neutral-tray",
    name: "Perler Mini Neutral Tray (8)",
    note: "Compact neutral mini palette for grayscale, skin, wood, and outline-heavy work.",
    entries: PERLER_NEUTRAL_TRAY.map((entry) => createPaletteEntry(entry, entry.code)),
  },
];

const getPalettePreset = (presetId) =>
  PALETTE_PRESETS.find((preset) => preset.id === presetId) || PALETTE_PRESETS[0];

const getBasePaletteEntries = () => getPalettePreset(state.selectedPalettePresetId).entries;

const getPaletteEntries = () => [...getBasePaletteEntries(), ...state.customPalette];

const getLabHueDegrees = (labColor) => {
  const angle = (Math.atan2(labColor.b, labColor.a) * 180) / Math.PI;
  return angle >= 0 ? angle : angle + 360;
};

const getHueDifference = (leftHue, rightHue) => {
  const rawDifference = Math.abs(leftHue - rightHue);
  return Math.min(rawDifference, 360 - rawDifference);
};

const deltaE2000 = (left, right) => {
  const kL = 1;
  const kC = 1;
  const kH = 1;

  const c1 = Math.sqrt(left.a * left.a + left.b * left.b);
  const c2 = Math.sqrt(right.a * right.a + right.b * right.b);
  const averageC = (c1 + c2) / 2;
  const compensation = 0.5 * (1 - Math.sqrt((averageC ** 7) / (averageC ** 7 + 25 ** 7)));

  const adjustedA1 = left.a * (1 + compensation);
  const adjustedA2 = right.a * (1 + compensation);
  const adjustedC1 = Math.sqrt(adjustedA1 * adjustedA1 + left.b * left.b);
  const adjustedC2 = Math.sqrt(adjustedA2 * adjustedA2 + right.b * right.b);
  const averageAdjustedC = (adjustedC1 + adjustedC2) / 2;

  const hue1 = adjustedC1 === 0 ? 0 : getLabHueDegrees({ a: adjustedA1, b: left.b });
  const hue2 = adjustedC2 === 0 ? 0 : getLabHueDegrees({ a: adjustedA2, b: right.b });

  const deltaLPrime = right.l - left.l;
  const deltaCPrime = adjustedC2 - adjustedC1;

  let deltaHue = 0;
  if (adjustedC1 !== 0 && adjustedC2 !== 0) {
    if (Math.abs(hue2 - hue1) <= 180) {
      deltaHue = hue2 - hue1;
    } else if (hue2 <= hue1) {
      deltaHue = hue2 - hue1 + 360;
    } else {
      deltaHue = hue2 - hue1 - 360;
    }
  }

  const deltaHPrime = 2 * Math.sqrt(adjustedC1 * adjustedC2) * Math.sin((deltaHue * Math.PI) / 360);
  const averageLPrime = (left.l + right.l) / 2;

  let averageHuePrime = hue1 + hue2;
  if (adjustedC1 !== 0 && adjustedC2 !== 0) {
    if (Math.abs(hue1 - hue2) > 180) {
      averageHuePrime = (hue1 + hue2 + 360) / 2;
    } else {
      averageHuePrime = (hue1 + hue2) / 2;
    }
  }

  const t =
    1 -
    0.17 * Math.cos(((averageHuePrime - 30) * Math.PI) / 180) +
    0.24 * Math.cos((2 * averageHuePrime * Math.PI) / 180) +
    0.32 * Math.cos(((3 * averageHuePrime + 6) * Math.PI) / 180) -
    0.2 * Math.cos(((4 * averageHuePrime - 63) * Math.PI) / 180);

  const deltaTheta = 30 * Math.exp(-(((averageHuePrime - 275) / 25) ** 2));
  const rC = 2 * Math.sqrt((averageAdjustedC ** 7) / (averageAdjustedC ** 7 + 25 ** 7));
  const sL =
    1 + (0.015 * ((averageLPrime - 50) ** 2)) / Math.sqrt(20 + (averageLPrime - 50) ** 2);
  const sC = 1 + 0.045 * averageAdjustedC;
  const sH = 1 + 0.015 * averageAdjustedC * t;
  const rT = -Math.sin((2 * deltaTheta * Math.PI) / 180) * rC;

  const lightnessTerm = deltaLPrime / (kL * sL);
  const chromaTerm = deltaCPrime / (kC * sC);
  const hueTerm = deltaHPrime / (kH * sH);

  return Math.sqrt(
    lightnessTerm * lightnessTerm +
      chromaTerm * chromaTerm +
      hueTerm * hueTerm +
      rT * chromaTerm * hueTerm,
  );
};

const formatNumber = (value) => new Intl.NumberFormat("en-US").format(value);

const clearCanvas = (ctx, canvas) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#151821";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const resizeCanvasToDisplaySize = (canvas) => {
  const rect = canvas.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(rect.width * pixelRatio));
  const height = Math.max(1, Math.round(rect.height * pixelRatio));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
};

const drawSourcePreviewInto = (ctx, canvas, options = {}) => {
  const { showCropOverlay = true } = options;

  resizeCanvasToDisplaySize(canvas);
  clearCanvas(ctx, canvas);

  if (!state.image) {
    return false;
  }

  const fit = fitBox(state.imageWidth, state.imageHeight, canvas.width, canvas.height);
  const offsetX = Math.floor((canvas.width - fit.width) / 2);
  const offsetY = Math.floor((canvas.height - fit.height) / 2);

  if (canvas === refs.sourceCanvas) {
    state.sourcePlacement = {
      offsetX,
      offsetY,
      drawWidth: fit.width,
      drawHeight: fit.height,
    };
  }

  drawAdjustedImageRegion(ctx, {
    sourceX: 0,
    sourceY: 0,
    sourceWidth: state.imageWidth,
    sourceHeight: state.imageHeight,
    destinationX: offsetX,
    destinationY: offsetY,
    destinationWidth: fit.width,
    destinationHeight: fit.height,
  });

  if (!showCropOverlay || !state.sourcePlacement) {
    return true;
  }

  const cropRect = cropToCanvasRect(getEditableCropRect());
  if (!cropRect) {
    return true;
  }

  ctx.save();
  ctx.fillStyle = "rgba(10, 10, 14, 0.55)";
  ctx.fillRect(offsetX, offsetY, fit.width, cropRect.y - offsetY);
  ctx.fillRect(offsetX, cropRect.y, cropRect.x - offsetX, cropRect.height);
  ctx.fillRect(
    cropRect.x + cropRect.width,
    cropRect.y,
    offsetX + fit.width - (cropRect.x + cropRect.width),
    cropRect.height,
  );
  ctx.fillRect(
    offsetX,
    cropRect.y + cropRect.height,
    fit.width,
    offsetY + fit.height - (cropRect.y + cropRect.height),
  );
  const isFullCrop = isFullCropRect(getEditableCropRect());
  ctx.strokeStyle = "#ffb062";
  ctx.lineWidth = 2;
  ctx.strokeRect(cropRect.x, cropRect.y, cropRect.width, cropRect.height);
  if (!isFullCrop) {
    ctx.fillStyle = "rgba(255, 176, 98, 0.2)";
    ctx.fillRect(cropRect.x, cropRect.y, cropRect.width, cropRect.height);
  }

  if (!isFullCrop) {
    const handleRadius = CROP_HANDLE_SIZE * Math.min(window.devicePixelRatio || 1, 2);
    const handles = [
      { x: cropRect.x, y: cropRect.y, glyph: "↖" },
      { x: cropRect.x + cropRect.width, y: cropRect.y, glyph: "↗" },
      { x: cropRect.x, y: cropRect.y + cropRect.height, glyph: "↙" },
      { x: cropRect.x + cropRect.width, y: cropRect.y + cropRect.height, glyph: "↘" },
    ];

    handles.forEach((handle) => {
      ctx.fillStyle = "#171a21";
      ctx.strokeStyle = "#ffb062";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(handle.x, handle.y, handleRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#ffcfac";
      ctx.font = `700 ${Math.max(12, handleRadius)}px "IBM Plex Sans", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(handle.glyph, handle.x, handle.y + 1);
    });
  }
  ctx.restore();
  return true;
};

const rgbToHsl = ({ r, g, b }) => {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;
  const delta = max - min;

  if (delta === 0) {
    return { h: 0, s: 0, l: lightness };
  }

  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  let hue;
  if (max === red) {
    hue = (green - blue) / delta + (green < blue ? 6 : 0);
  } else if (max === green) {
    hue = (blue - red) / delta + 2;
  } else {
    hue = (red - green) / delta + 4;
  }

  return { h: hue * 60, s: saturation, l: lightness };
};

const hslToRgb = ({ h, s, l }) => {
  if (s === 0) {
    const value = Math.round(l * 255);
    return { r: value, g: value, b: value };
  }

  const hueToRgb = (p, q, t) => {
    let temp = t;
    if (temp < 0) temp += 1;
    if (temp > 1) temp -= 1;
    if (temp < 1 / 6) return p + (q - p) * 6 * temp;
    if (temp < 1 / 2) return q;
    if (temp < 2 / 3) return p + (q - p) * (2 / 3 - temp) * 6;
    return p;
  };

  const hue = (((h % 360) + 360) % 360) / 360;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  return {
    r: Math.round(hueToRgb(p, q, hue + 1 / 3) * 255),
    g: Math.round(hueToRgb(p, q, hue) * 255),
    b: Math.round(hueToRgb(p, q, hue - 1 / 3) * 255),
  };
};

const getHueShiftDegrees = () => Number(refs.hueShift.value) || 0;
const getBrightnessMultiplier = () => (Number(refs.brightnessBoost.value) || 100) / 100;
const getSaturationMultiplier = () => (Number(refs.saturationBoost.value) || 100) / 100;
const getShadowLift = () => (Number(refs.shadowLift.value) || 0) / 100;
const getHighlightRecovery = () => (Number(refs.highlightRecovery.value) || 0) / 100;

const applyImageAdjustmentChanges = () => {
  if (!state.image) {
    return;
  }

  drawImagePreview();
  generatePattern();
};

const scheduleImageAdjustmentApply = (delayMs = 180) => {
  if (state.adjustmentApplyTimer) {
    window.clearTimeout(state.adjustmentApplyTimer);
  }

  state.adjustmentApplyTimer = window.setTimeout(() => {
    state.adjustmentApplyTimer = null;
    applyImageAdjustmentChanges();
  }, delayMs);
};

const resetAdjustments = () => {
  if (state.adjustmentApplyTimer) {
    window.clearTimeout(state.adjustmentApplyTimer);
    state.adjustmentApplyTimer = null;
  }

  refs.hueShift.value = "0";
  refs.brightnessBoost.value = "100";
  refs.saturationBoost.value = "100";
  refs.shadowLift.value = "0";
  refs.highlightRecovery.value = "0";
  updateAdjustmentLabels();

  applyImageAdjustmentChanges();
};

const applyImageAdjustments = (imageData) => {
  const hueShift = getHueShiftDegrees();
  const brightnessMultiplier = getBrightnessMultiplier();
  const saturationMultiplier = getSaturationMultiplier();
  const shadowLift = getShadowLift();
  const highlightRecovery = getHighlightRecovery();
  const { data } = imageData;

  if (
    hueShift === 0 &&
    brightnessMultiplier === 1 &&
    saturationMultiplier === 1 &&
    shadowLift === 0 &&
    highlightRecovery === 0
  ) {
    return imageData;
  }

  for (let index = 0; index < data.length; index += 4) {
    if (data[index + 3] < 1) {
      continue;
    }

    const hsl = rgbToHsl({
      r: data[index],
      g: data[index + 1],
      b: data[index + 2],
    });

    let adjustedLightness = clamp(hsl.l * brightnessMultiplier, 0, 1);
    const shadowWeight = (1 - adjustedLightness) ** 2;
    const highlightWeight = adjustedLightness ** 2;

    adjustedLightness = clamp(
      adjustedLightness + shadowWeight * shadowLift * (1 - adjustedLightness),
      0,
      1,
    );
    adjustedLightness = clamp(
      adjustedLightness - highlightWeight * highlightRecovery * adjustedLightness * 0.85,
      0,
      1,
    );

    const adjustedRgb = hslToRgb({
      h: hsl.h + hueShift,
      s: clamp(hsl.s * saturationMultiplier, 0, 1),
      l: adjustedLightness,
    });

    data[index] = adjustedRgb.r;
    data[index + 1] = adjustedRgb.g;
    data[index + 2] = adjustedRgb.b;
  }

  return imageData;
};

const drawAdjustedImageRegion = (ctx, drawConfig) => {
  const {
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    destinationX,
    destinationY,
    destinationWidth,
    destinationHeight,
    mirror = false,
  } = drawConfig;

  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = Math.max(1, Math.round(destinationWidth));
  tempCanvas.height = Math.max(1, Math.round(destinationHeight));
  const tempCtx = tempCanvas.getContext("2d", { willReadFrequently: true });

  tempCtx.imageSmoothingEnabled = true;
  if (mirror) {
    tempCtx.save();
    tempCtx.translate(tempCanvas.width, 0);
    tempCtx.scale(-1, 1);
  }

  tempCtx.drawImage(
    state.image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    0,
    0,
    tempCanvas.width,
    tempCanvas.height,
  );

  if (mirror) {
    tempCtx.restore();
  }

  const adjusted = applyImageAdjustments(
    tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height),
  );
  tempCtx.putImageData(adjusted, 0, 0);
  ctx.drawImage(
    tempCanvas,
    0,
    0,
    tempCanvas.width,
    tempCanvas.height,
    destinationX,
    destinationY,
    destinationWidth,
    destinationHeight,
  );
};

const updateAdjustmentLabels = () => {
  refs.hueShiftValue.textContent = `${getHueShiftDegrees()}deg`;
  refs.brightnessValue.textContent = `${Math.round(getBrightnessMultiplier() * 100)}%`;
  refs.saturationValue.textContent = `${Math.round(getSaturationMultiplier() * 100)}%`;
  refs.shadowLiftValue.textContent = `${Math.round(getShadowLift() * 100)}%`;
  refs.highlightRecoveryValue.textContent = `${Math.round(getHighlightRecovery() * 100)}%`;
};

const createFullCropRect = () => ({
  x: 0,
  y: 0,
  width: state.imageWidth,
  height: state.imageHeight,
});

const getCommittedCropRect = () => {
  if (!state.image) {
    return null;
  }

  return state.cropRect || createFullCropRect();
};

const getEditableCropRect = () => {
  if (!state.image) {
    return null;
  }

  return state.cropDraftRect || state.cropRect || createFullCropRect();
};

const getCropSourceDimensions = () => {
  const crop = getCommittedCropRect();
  return crop
    ? { width: crop.width, height: crop.height }
    : { width: state.imageWidth, height: state.imageHeight };
};

const getSelectedPatternRatio = () => {
  const width = clamp(Number(refs.patternWidth.value) || 64, 1, 220);
  const height = clamp(Number(refs.patternHeight.value) || 64, 1, 220);
  return width / height;
};

const isFullCropRect = (rect) =>
  rect &&
  rect.x === 0 &&
  rect.y === 0 &&
  rect.width === state.imageWidth &&
  rect.height === state.imageHeight;

const fitBox = (sourceWidth, sourceHeight, maxWidth, maxHeight) => {
  const ratio = sourceWidth / sourceHeight;
  let width = maxWidth;
  let height = Math.round(width / ratio);

  if (height > maxHeight) {
    height = maxHeight;
    width = Math.round(height * ratio);
  }

  return { width, height };
};

const getCanvasPointer = (event, canvas) => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) * canvas.width) / rect.width,
    y: ((event.clientY - rect.top) * canvas.height) / rect.height,
  };
};

const canvasPointToImagePoint = (point) => {
  const placement = state.sourcePlacement;

  if (!placement) {
    return null;
  }

  if (
    point.x < placement.offsetX ||
    point.x > placement.offsetX + placement.drawWidth ||
    point.y < placement.offsetY ||
    point.y > placement.offsetY + placement.drawHeight
  ) {
    return null;
  }

  const relativeX = (point.x - placement.offsetX) / placement.drawWidth;
  const relativeY = (point.y - placement.offsetY) / placement.drawHeight;

  return {
    x: clamp(Math.round(relativeX * state.imageWidth), 0, state.imageWidth),
    y: clamp(Math.round(relativeY * state.imageHeight), 0, state.imageHeight),
  };
};

const canvasPointToImagePointClamped = (point) => {
  const placement = state.sourcePlacement;

  if (!placement) {
    return null;
  }

  const clampedX = clamp(point.x, placement.offsetX, placement.offsetX + placement.drawWidth);
  const clampedY = clamp(point.y, placement.offsetY, placement.offsetY + placement.drawHeight);

  const relativeX = (clampedX - placement.offsetX) / placement.drawWidth;
  const relativeY = (clampedY - placement.offsetY) / placement.drawHeight;

  return {
    x: clamp(Math.round(relativeX * state.imageWidth), 0, state.imageWidth),
    y: clamp(Math.round(relativeY * state.imageHeight), 0, state.imageHeight),
  };
};

const isPointInsideCropRect = (point, cropRect) =>
  Boolean(
    point &&
      cropRect &&
      point.x >= cropRect.x &&
      point.x <= cropRect.x + cropRect.width &&
      point.y >= cropRect.y &&
      point.y <= cropRect.y + cropRect.height,
  );

const getCropHandlePoints = (cropRect) => ({
  topLeft: { x: cropRect.x, y: cropRect.y },
  topRight: { x: cropRect.x + cropRect.width, y: cropRect.y },
  bottomLeft: { x: cropRect.x, y: cropRect.y + cropRect.height },
  bottomRight: { x: cropRect.x + cropRect.width, y: cropRect.y + cropRect.height },
});

const getResizeAnchorForHandle = (cropRect, handle) => {
  const handlePoints = getCropHandlePoints(cropRect);
  if (handle === "topLeft") return handlePoints.bottomRight;
  if (handle === "topRight") return handlePoints.bottomLeft;
  if (handle === "bottomLeft") return handlePoints.topRight;
  return handlePoints.topLeft;
};

const getCropHandleAtCanvasPoint = (canvasPoint, cropRect) => {
  const canvasRect = cropToCanvasRect(cropRect);
  if (!canvasRect) {
    return null;
  }

  const handleRadius = CROP_HANDLE_SIZE * Math.min(window.devicePixelRatio || 1, 2);
  const handlePoints = {
    topLeft: { x: canvasRect.x, y: canvasRect.y },
    topRight: { x: canvasRect.x + canvasRect.width, y: canvasRect.y },
    bottomLeft: { x: canvasRect.x, y: canvasRect.y + canvasRect.height },
    bottomRight: { x: canvasRect.x + canvasRect.width, y: canvasRect.y + canvasRect.height },
  };

  for (const [handleName, handlePoint] of Object.entries(handlePoints)) {
    const dx = canvasPoint.x - handlePoint.x;
    const dy = canvasPoint.y - handlePoint.y;
    if (Math.sqrt(dx * dx + dy * dy) <= handleRadius) {
      return handleName;
    }
  }

  return null;
};

const updateCropCursor = (canvasPoint) => {
  if (!state.image) {
    refs.sourceCanvas.style.cursor = "crosshair";
    return;
  }

  const currentCrop = getEditableCropRect() || createFullCropRect();
  const imagePoint = canvasPointToImagePoint(canvasPoint);
  const handle = !isFullCropRect(currentCrop)
    ? getCropHandleAtCanvasPoint(canvasPoint, currentCrop)
    : null;

  if (handle === "topLeft" || handle === "bottomRight") {
    refs.sourceCanvas.style.cursor = "nwse-resize";
  } else if (handle === "topRight" || handle === "bottomLeft") {
    refs.sourceCanvas.style.cursor = "nesw-resize";
  } else if (!isFullCropRect(currentCrop) && isPointInsideCropRect(imagePoint, currentCrop)) {
    refs.sourceCanvas.style.cursor = "move";
  } else {
    refs.sourceCanvas.style.cursor = "crosshair";
  }
};

const moveCropRect = (cropRect, nextLeft, nextTop) => ({
  x: clamp(nextLeft, 0, state.imageWidth - cropRect.width),
  y: clamp(nextTop, 0, state.imageHeight - cropRect.height),
  width: cropRect.width,
  height: cropRect.height,
});

const normalizeCropRect = (startPoint, endPoint) => {
  const left = clamp(Math.min(startPoint.x, endPoint.x), 0, state.imageWidth);
  const top = clamp(Math.min(startPoint.y, endPoint.y), 0, state.imageHeight);
  const right = clamp(Math.max(startPoint.x, endPoint.x), 0, state.imageWidth);
  const bottom = clamp(Math.max(startPoint.y, endPoint.y), 0, state.imageHeight);

  return {
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
  };
};

const constrainCropRectToRatio = (startPoint, endPoint) => {
  const ratio = getSelectedPatternRatio();
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;
  const directionX = deltaX >= 0 ? 1 : -1;
  const directionY = deltaY >= 0 ? 1 : -1;

  let width = Math.abs(deltaX);
  let height = Math.abs(deltaY);

  if (width < 1 && height < 1) {
    return null;
  }

  if (height < 1) {
    height = Math.max(1, width / ratio);
  } else if (width < 1) {
    width = Math.max(1, height * ratio);
  } else if (width / height > ratio) {
    height = width / ratio;
  } else {
    width = height * ratio;
  }

  const maxWidthByDirection = directionX > 0 ? state.imageWidth - startPoint.x : startPoint.x;
  const maxHeightByDirection = directionY > 0 ? state.imageHeight - startPoint.y : startPoint.y;

  width = Math.min(width, maxWidthByDirection, maxHeightByDirection * ratio);
  height = width / ratio;

  if (height > maxHeightByDirection) {
    height = maxHeightByDirection;
    width = height * ratio;
  }

  const adjustedEnd = {
    x: startPoint.x + width * directionX,
    y: startPoint.y + height * directionY,
  };

  return normalizeCropRect(startPoint, adjustedEnd);
};

const snapCropRectToEdges = (cropRect) => {
  if (!cropRect) {
    return null;
  }

  let left = cropRect.x <= EDGE_SNAP_PX ? 0 : cropRect.x;
  let top = cropRect.y <= EDGE_SNAP_PX ? 0 : cropRect.y;
  let right =
    state.imageWidth - (cropRect.x + cropRect.width) <= EDGE_SNAP_PX
      ? state.imageWidth
      : cropRect.x + cropRect.width;
  let bottom =
    state.imageHeight - (cropRect.y + cropRect.height) <= EDGE_SNAP_PX
      ? state.imageHeight
      : cropRect.y + cropRect.height;

  const snappedRect = {
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
  };

  const cropCoverage =
    (snappedRect.width * snappedRect.height) / (state.imageWidth * state.imageHeight);

  if (cropCoverage >= NEAR_FULL_CROP_RATIO) {
    return createFullCropRect();
  }

  return snappedRect;
};

const cropToCanvasRect = (cropRect) => {
  const placement = state.sourcePlacement;

  if (!cropRect || !placement) {
    return null;
  }

  return {
    x: placement.offsetX + (cropRect.x / state.imageWidth) * placement.drawWidth,
    y: placement.offsetY + (cropRect.y / state.imageHeight) * placement.drawHeight,
    width: (cropRect.width / state.imageWidth) * placement.drawWidth,
    height: (cropRect.height / state.imageHeight) * placement.drawHeight,
  };
};

const refreshImageMeta = () => {
  if (!state.image) {
    refs.imageMeta.textContent = "No image loaded";
    return;
  }

  const crop = state.cropToolOpen ? getEditableCropRect() : getCommittedCropRect();
  const cropLabel = isFullCropRect(crop)
    ? "full image"
    : `${crop.width} x ${crop.height}px crop`;
  const ratioWidth = clamp(Number(refs.patternWidth.value) || 64, 1, 220);
  const ratioHeight = clamp(Number(refs.patternHeight.value) || 64, 1, 220);

  refs.imageMeta.textContent = `${state.imageName} - ${state.imageWidth} x ${state.imageHeight}px`;
  refs.cropMeta.textContent = state.cropToolOpen
    ? `Crop area: ${cropLabel}. Drag inside to move, drag the corner arrows to resize, or drag outside to create a new ${ratioWidth}:${ratioHeight} crop.`
    : `Current crop: ${cropLabel}. Open Crop image to adjust the visible area.`;
};

const drawImagePreview = () => {
  state.sourcePlacement = null;

  drawSourcePreviewInto(sourceCtx, refs.sourceCanvas, { showCropOverlay: state.cropToolOpen });

  updateCropUi();
  drawMobileSetupPreview();
};

const setStats = (items) => {
  refs.statsGrid.innerHTML = items
    .map(
      (item) => `
        <article class="stat-card">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `,
    )
    .join("");
};

const updatePaletteCounter = () => {
  refs.activePaletteCount.textContent = String(state.activePaletteIds.size);
};

const renderMobileView = () => {
  const mobile = isMobileLayout();
  document.body.classList.toggle("mobile-nav-enabled", mobile);

  refs.controlsPanel.classList.toggle(
    "mobile-view-hidden",
    mobile && state.mobileView === "pattern",
  );
  refs.outputPanel.classList.toggle(
    "mobile-view-hidden",
    mobile && state.mobileView !== "pattern",
  );

  refs.mobileViewPanels.forEach((panel) => {
    if (!mobile) {
      panel.classList.remove("mobile-view-hidden");
      return;
    }

    const panelView = panel.dataset.mobileViewPanel;
    const isVisible =
      panelView === "pattern"
        ? state.mobileView === "pattern"
        : state.mobileView !== "pattern" && panelView === state.mobileView;

    panel.classList.toggle("mobile-view-hidden", !isVisible);
  });

  refs.mobileViewButtons.forEach((button) => {
    const isActive = button.dataset.mobileViewTrigger === state.mobileView;
    button.classList.toggle("mobile-nav-button-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const updateCropUi = () => {
  const editing = isCropEditingEnabled();
  document.body.classList.toggle("crop-tool-open", editing);
  refs.sourcePreviewCard.classList.toggle("crop-tool-open", editing);
  refs.cropToolBackdrop.hidden = !editing;
  refs.sourceCanvas.classList.toggle("crop-editing-active", editing);
  refs.sourceCanvas.classList.toggle("crop-editing-locked", !editing);
  refs.openCropToolBtn.hidden = editing;
  refs.saveCropBtn.hidden = !editing;
  refs.cancelCropBtn.hidden = !editing;
  refs.resetCropBtn.textContent = editing ? "Reset to full image" : "Reset crop";

  if (!state.image) {
    refs.cropMeta.textContent = "Upload an image to adjust the crop.";
    refs.openCropToolBtn.disabled = true;
    refs.saveCropBtn.disabled = true;
    refs.cancelCropBtn.disabled = true;
    refs.resetCropBtn.disabled = true;
    return;
  }
  refs.openCropToolBtn.disabled = false;
  refs.saveCropBtn.disabled = false;
  refs.cancelCropBtn.disabled = false;
  refs.resetCropBtn.disabled = false;

  refreshImageMeta();
};

const setMobileView = (view, options = {}) => {
  const { scroll = true } = options;
  state.mobileView = view;
  renderMobileView();

  if (!isMobileLayout()) {
    return;
  }

  requestAnimationFrame(() => {
    if (view === "setup" && state.image) {
      drawImagePreview();
    }
    if (view === "pattern" && state.pattern) {
      drawPatternPreview();
    }

    if (scroll) {
      const target =
        view === "pattern"
          ? refs.outputPanel
          : refs.controlsPanel;
      target?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
};

const refreshPalettePresetUi = () => {
  const preset = getPalettePreset(state.selectedPalettePresetId);
  refs.palettePreset.value = preset.id;
  refs.palettePresetNote.textContent = `${preset.note} Manual colors stay available on top of the preset.`;
};

const applyPalettePreset = (presetId) => {
  state.selectedPalettePresetId = getPalettePreset(presetId).id;
  state.activePaletteIds = new Set(getPaletteEntries().map((entry) => entry.id));
  state.pattern = null;
  refreshPalettePresetUi();
  updatePaletteCounter();
  savePreferences();
  renderPalette();
  if (state.image) {
    generatePattern();
  } else {
    renderStats();
    renderLegend();
    renderInstructions();
  }
};

const sanitizeInventoryEntry = (value) => {
  const owned =
    value && value.owned !== "" && Number.isFinite(Number(value.owned))
      ? Math.max(0, Math.round(Number(value.owned)))
      : "";

  return {
    owned,
    lowInventory: Boolean(value?.lowInventory),
  };
};

const savePreferences = () => {
  try {
    const payload = {
      selectedPalettePresetId: state.selectedPalettePresetId,
      activePaletteIds: [...state.activePaletteIds],
      customPalette: state.customPalette.map(({ id, code, name, hex }) => ({
        id,
        code,
        name,
        hex,
      })),
      inventoryByColorId: Object.fromEntries(
        Object.entries(state.inventoryByColorId).map(([colorId, settings]) => [
          colorId,
          sanitizeInventoryEntry(settings),
        ]),
      ),
      inventoryBalancing: refs.inventoryBalancing.value,
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn("Unable to save palette preferences.", error);
  }
};

const loadPreferences = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    const saved = JSON.parse(raw);

    if (typeof saved.selectedPalettePresetId === "string") {
      state.selectedPalettePresetId = getPalettePreset(saved.selectedPalettePresetId).id;
    }

    if (Array.isArray(saved.customPalette)) {
      state.customPalette = saved.customPalette
        .map((entry) => {
          if (!entry || !entry.id || !entry.name || !entry.hex) {
            return null;
          }

          const hex = normalizeHexColor(entry.hex);
          if (!hex) {
            return null;
          }

          return createPaletteEntry(
            {
              id: entry.id,
              code: entry.code || entry.id,
              name: entry.name,
              hex,
            },
            entry.code || entry.id,
          );
        })
        .filter(Boolean);
    }

    const availableIds = new Set(getPaletteEntries().map((entry) => entry.id));
    if (Array.isArray(saved.activePaletteIds) && saved.activePaletteIds.length > 0) {
      state.activePaletteIds = new Set(
        saved.activePaletteIds.filter((id) => typeof id === "string" && availableIds.has(id)),
      );
      if (state.activePaletteIds.size === 0) {
        state.activePaletteIds = new Set(availableIds);
      }
    } else {
      state.activePaletteIds = new Set(availableIds);
    }

    if (saved.inventoryByColorId && typeof saved.inventoryByColorId === "object") {
      state.inventoryByColorId = Object.fromEntries(
        Object.entries(saved.inventoryByColorId)
          .filter(([colorId]) => availableIds.has(colorId))
          .map(([colorId, settings]) => [colorId, sanitizeInventoryEntry(settings)]),
      );
    }

    if (
      typeof saved.inventoryBalancing === "string" &&
      [...refs.inventoryBalancing.options].some((option) => option.value === saved.inventoryBalancing)
    ) {
      refs.inventoryBalancing.value = saved.inventoryBalancing;
    }

    refreshPalettePresetUi();
  } catch (error) {
    console.warn("Unable to load saved palette preferences.", error);
  }
};

const getUsedColors = (pattern) =>
  [...pattern.counts.entries()]
    .map(([id, count]) => ({
      color: getPaletteEntries().find((entry) => entry.id === id),
      count,
    }))
    .filter((item) => item.color)
    .sort((left, right) => right.count - left.count);

const getInventorySettings = (colorId) => {
  const inventory = state.inventoryByColorId[colorId];
  return {
    owned: inventory?.owned ?? "",
    lowInventory: inventory?.lowInventory ?? false,
  };
};

const setInventorySettings = (colorId, patch) => {
  const current = getInventorySettings(colorId);
  state.inventoryByColorId[colorId] = {
    ...current,
    ...patch,
  };
};

const getInstructionRows = (pattern) => {
  const { width, height, cells } = pattern;

  return Array.from({ length: height }, (_, rowIndex) => {
    const start = rowIndex * width;
    const rowCells = cells.slice(start, start + width);
    const chunks = [];
    let currentId = null;
    let runLength = 0;

    for (const cell of rowCells) {
      const nextId = cell ? cell.id : "empty";
      if (nextId === currentId) {
        runLength += 1;
      } else {
        if (currentId !== null) {
          chunks.push({ id: currentId, count: runLength });
        }
        currentId = nextId;
        runLength = 1;
      }
    }

    if (currentId !== null) {
      chunks.push({ id: currentId, count: runLength });
    }

    const chunkText = chunks
      .map((chunk) => {
        if (chunk.id === "empty") {
          return `${chunk.count}x empty`;
        }

        const color = getPaletteEntries().find((entry) => entry.id === chunk.id);
        return `${chunk.count}x ${color.code}`;
      })
      .join(" | ");

    return {
      rowNumber: rowIndex + 1,
      chunkText,
      codeText: rowCells.map((cell) => (cell ? cell.code : "__")).join(" "),
    };
  });
};

const renderPalette = () => {
  const usedCounts = state.pattern ? new Map(state.pattern.counts) : new Map();
  refs.paletteGrid.innerHTML = getPaletteEntries()
    .slice()
    .sort((left, right) => {
      const usedDifference = (usedCounts.get(right.id) || 0) - (usedCounts.get(left.id) || 0);
      if (usedDifference !== 0) {
        return usedDifference;
      }

      const activeDifference =
        Number(state.activePaletteIds.has(right.id)) - Number(state.activePaletteIds.has(left.id));
      if (activeDifference !== 0) {
        return activeDifference;
      }

      return left.code.localeCompare(right.code, undefined, { numeric: true, sensitivity: "base" });
    })
    .map((entry) => {
      const checked = state.activePaletteIds.has(entry.id);
      const inventory = getInventorySettings(entry.id);
      const ownedValue = inventory.owned === "" ? "" : String(inventory.owned);
      const usedCount = usedCounts.get(entry.id) || 0;
      const difference =
        inventory.owned === "" || Number.isNaN(Number(inventory.owned))
          ? null
          : Math.max(0, Number(inventory.owned)) - usedCount;
      const statusLabel =
        usedCount === 0
          ? inventory.owned === ""
            ? "Not used in this pattern"
            : `${formatNumber(Math.max(0, Number(inventory.owned)))} available`
          : difference === null
            ? `${formatNumber(usedCount)} used`
            : difference >= 0
              ? `${formatNumber(usedCount)} used · ${formatNumber(difference)} spare`
              : `${formatNumber(usedCount)} used · Need ${formatNumber(Math.abs(difference))} more`;
      const statusClass =
        usedCount === 0 && inventory.owned === ""
          ? "inventory-status inventory-neutral"
          : difference === null
            ? "inventory-status inventory-neutral"
            : difference >= 0
              ? "inventory-status inventory-ok"
              : "inventory-status inventory-short";

      return `
        <article class="palette-chip ${checked ? "" : "disabled"} ${inventory.lowInventory ? "palette-chip-low" : ""}">
          <label class="palette-main">
            <input type="checkbox" data-palette-id="${entry.id}" ${checked ? "checked" : ""} />
            <span class="swatch" style="background:${entry.hex}"></span>
            <span class="palette-name">${entry.code} - ${entry.name}<br />${entry.hex.toUpperCase()}</span>
          </label>
          <div class="palette-inventory">
            <label class="inventory-row">
              <span>Owned</span>
              <input
                type="number"
                min="0"
                step="1"
                class="inventory-input palette-inventory-input"
                data-palette-inventory="${entry.id}"
                value="${ownedValue}"
                placeholder="set"
              />
            </label>
            <label class="inventory-toggle">
              <input
                type="checkbox"
                class="inventory-checkbox"
                data-palette-low="${entry.id}"
                ${inventory.lowInventory ? "checked" : ""}
              />
              <span>Low inventory</span>
            </label>
            <span class="${statusClass}">${statusLabel}</span>
          </div>
        </article>
      `;
    })
    .join("");

  refs.paletteGrid.querySelectorAll("input[data-palette-id]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const { paletteId } = event.target.dataset;
      if (!paletteId) {
        return;
      }

      if (event.target.checked) {
        state.activePaletteIds.add(paletteId);
      } else if (state.activePaletteIds.size > 1) {
        state.activePaletteIds.delete(paletteId);
      } else {
        event.target.checked = true;
      }

      updatePaletteCounter();
      savePreferences();
      renderPalette();
      renderLegend();
      if (state.image) {
        generatePattern();
      }
    });
  });

  refs.paletteGrid.querySelectorAll(".palette-inventory-input").forEach((input) => {
    const applyInventoryValue = (event) => {
      const colorId = event.target.dataset.paletteInventory;
      if (!colorId) {
        return;
      }

      setInventorySettings(colorId, {
        owned: event.target.value === "" ? "" : Math.max(0, Number(event.target.value)),
      });
      savePreferences();
      renderPalette();
      renderLegend();
      if (state.image) {
        generatePattern();
      }
    };

    input.addEventListener("change", applyInventoryValue);
    input.addEventListener("blur", applyInventoryValue);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.currentTarget.blur();
      }
    });
  });

  refs.paletteGrid.querySelectorAll(".inventory-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const colorId = event.target.dataset.paletteLow;
      if (!colorId) {
        return;
      }

      setInventorySettings(colorId, {
        lowInventory: event.target.checked,
      });
      savePreferences();
      renderPalette();
      renderLegend();
      if (state.image) {
        generatePattern();
      }
    });
  });
};

const getTargetDimensions = () => ({
  width: clamp(Number(refs.patternWidth.value) || 64, 8, 220),
  height: clamp(Number(refs.patternHeight.value) || 64, 8, 220),
});

const getMatchingMode = () => refs.matchingMode.value || "balanced";
const getInventoryBalanceMode = () => refs.inventoryBalancing.value || "off";

const normalizeHexColor = (value) => {
  const trimmed = String(value || "").trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{6}$/.test(trimmed)) {
    return null;
  }

  return `#${trimmed.toLowerCase()}`;
};

const addCustomColor = () => {
  const code = String(refs.customColorCode.value || "").trim();
  const name = String(refs.customColorName.value || "").trim();
  const hex = normalizeHexColor(refs.customColorHex.value || refs.customColorPicker.value);

  if (!code || !name || !hex) {
    return;
  }

  const id = `custom-${code.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
  const paletteEntry = createPaletteEntry(
    {
      id,
      code,
      name,
      hex,
    },
    code,
  );

  state.customPalette.push(paletteEntry);
  state.activePaletteIds.add(id);
  refs.customColorCode.value = "";
  refs.customColorName.value = "";
  refs.customColorHex.value = hex;
  refs.customColorPicker.value = hex;
  updatePaletteCounter();
  savePreferences();
  renderPalette();
  renderLegend();

  if (state.image) {
    generatePattern();
  }
};

const buildWorkingImageData = (width, height) => {
  const workingCanvas = document.createElement("canvas");
  const workingCtx = workingCanvas.getContext("2d", { willReadFrequently: true });
  const cropRect = getCommittedCropRect();
  const shouldMirror = refs.mirrorPattern.checked;

  workingCanvas.width = width;
  workingCanvas.height = height;
  workingCtx.imageSmoothingEnabled = true;
  workingCtx.clearRect(0, 0, width, height);
  drawAdjustedImageRegion(workingCtx, {
    sourceX: cropRect.x,
    sourceY: cropRect.y,
    sourceWidth: cropRect.width,
    sourceHeight: cropRect.height,
    destinationX: 0,
    destinationY: 0,
    destinationWidth: width,
    destinationHeight: height,
    mirror: shouldMirror,
  });

  return workingCtx.getImageData(0, 0, width, height);
};

const scorePaletteCandidate = (sourceLab, candidate, mode) => {
  let score = deltaE2000(sourceLab, candidate.lab);
  const sourceChroma = Math.sqrt(sourceLab.a * sourceLab.a + sourceLab.b * sourceLab.b);
  const sourceHue = getLabHueDegrees(sourceLab);
  const candidateHue = getLabHueDegrees(candidate.lab);
  const hueDifference = getHueDifference(sourceHue, candidateHue);
  const lightnessDifference = Math.abs(sourceLab.l - candidate.lab.l);

  if (mode === "nearest-lab") {
    return score;
  }

  const settingsByMode = {
    balanced: {
      neutralPenalty: 0.35,
      vividPenalty: 10,
      huePenalty: 0.08,
      contrastPenalty: 0.04,
      blackPenalty: 22,
      whitePenalty: 24,
    },
    "preserve-hue": {
      neutralPenalty: 0.42,
      vividPenalty: 13,
      huePenalty: 0.16,
      contrastPenalty: 0.03,
      blackPenalty: 18,
      whitePenalty: 18,
    },
    "preserve-contrast": {
      neutralPenalty: 0.28,
      vividPenalty: 8,
      huePenalty: 0.06,
      contrastPenalty: 0.18,
      blackPenalty: 26,
      whitePenalty: 28,
    },
    vivid: {
      neutralPenalty: 0.52,
      vividPenalty: 18,
      huePenalty: 0.14,
      contrastPenalty: 0.05,
      blackPenalty: 20,
      whitePenalty: 20,
    },
  };

  const settings = settingsByMode[mode] || settingsByMode.balanced;

  if (sourceChroma > 16 && candidate.chroma < 8) {
    score += 10 + (sourceChroma - candidate.chroma) * settings.neutralPenalty;
  }

  if (sourceChroma > 24 && candidate.chroma < 12) {
    score += settings.vividPenalty;
  }

  if (sourceChroma > 10 && candidate.chroma > 8) {
    score += Math.max(0, hueDifference - 18) * settings.huePenalty;
  }

  if (mode === "preserve-contrast" || mode === "balanced") {
    score += lightnessDifference * settings.contrastPenalty;
  }

  if (sourceLab.l < 52 && sourceChroma > 12 && candidate.id === "white") {
    score += settings.whitePenalty;
  }

  if (sourceLab.l > 35 && sourceChroma > 14 && candidate.id === "black") {
    score += settings.blackPenalty;
  }

  if (sourceLab.l > 82 && candidate.id === "black") {
    score += 26;
  }

  if (sourceLab.l < 22 && candidate.id === "white") {
    score += 28;
  }

  return score;
};

const scoreInventoryPenalty = (candidate, counts, balanceMode, progressRatio = 1) => {
  if (balanceMode === "off") {
    return 0;
  }

  const settings =
    balanceMode === "strong"
      ? {
          lowInventoryPenalty: 16,
          usagePenalty: 24,
          shortagePenalty: 70,
          pacingPenalty: 48,
          pacingGraceRatio: 0.04,
          pacingGraceBeads: 1,
        }
      : {
          lowInventoryPenalty: 8,
          usagePenalty: 12,
          shortagePenalty: 36,
          pacingPenalty: 24,
          pacingGraceRatio: 0.08,
          pacingGraceBeads: 2,
        };

  const inventory = getInventorySettings(candidate.id);
  const usedCount = counts.get(candidate.id) || 0;
  let penalty = inventory.lowInventory ? settings.lowInventoryPenalty : 0;

  if (inventory.owned === "" || Number.isNaN(Number(inventory.owned))) {
    return penalty;
  }

  const ownedCount = Math.max(0, Number(inventory.owned));
  if (ownedCount === 0) {
    return penalty + settings.shortagePenalty * 2;
  }

  const projectedUsage = usedCount + 1;
  const usageRatio = projectedUsage / ownedCount;
  const allowedUsageByNow = Math.max(
    settings.pacingGraceBeads,
    Math.ceil(ownedCount * progressRatio + ownedCount * settings.pacingGraceRatio),
  );
  const pacingExcess = Math.max(0, projectedUsage - allowedUsageByNow);

  if (usageRatio > 1) {
    return penalty + settings.shortagePenalty + (usageRatio - 1) * settings.shortagePenalty;
  }

  if (pacingExcess > 0) {
    const pacingPressure = pacingExcess / Math.max(ownedCount, 1);
    penalty += settings.pacingPenalty * (1 + pacingPressure * ownedCount * 0.08);
  }

  if (usageRatio > 0.6) {
    const pressure = (usageRatio - 0.6) / 0.4;
    penalty += pressure * pressure * settings.usagePenalty;
  }

  return penalty;
};

const findClosestPaletteColor = (labColor, activePalette, counts, progressRatio) => {
  let winner = activePalette[0];
  let bestDistance = Number.POSITIVE_INFINITY;
  const matchingMode = getMatchingMode();
  const inventoryBalanceMode = getInventoryBalanceMode();

  for (const candidate of activePalette) {
    const distance =
      scorePaletteCandidate(labColor, candidate, matchingMode) +
      scoreInventoryPenalty(candidate, counts, inventoryBalanceMode, progressRatio);
    if (distance < bestDistance) {
      bestDistance = distance;
      winner = candidate;
    }
  }

  return winner;
};

const makePattern = () => {
  if (!state.image) {
    return null;
  }

  const { width, height } = getTargetDimensions();
  const source = buildWorkingImageData(width, height);
  const data = source.data;
  const ditherAmount = Number(refs.ditherStrength.value) || 0;
  const backgroundMode = refs.backgroundMode.value;
  const activePalette = getPaletteEntries().filter((entry) => state.activePaletteIds.has(entry.id));
  const cells = [];
  const counts = new Map();
  const totalCells = width * height;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * 4;
      const alpha = data[index + 3];
      const progressRatio = (y * width + x + 1) / totalCells;

      if (alpha < 36) {
        if (backgroundMode === "empty") {
          cells.push(null);
          continue;
        }

        const fillId = backgroundMode === "white" ? "white" : "see-through";
        const fillColor = getPaletteEntries().find((entry) => entry.id === fillId);
        cells.push(fillColor);
        counts.set(fillColor.id, (counts.get(fillColor.id) || 0) + 1);
        continue;
      }

      const currentRgb = {
        r: data[index],
        g: data[index + 1],
        b: data[index + 2],
      };
      const matched = findClosestPaletteColor(
        rgbToLab(currentRgb),
        activePalette,
        counts,
        progressRatio,
      );

      cells.push(matched);
      counts.set(matched.id, (counts.get(matched.id) || 0) + 1);

      if (ditherAmount > 0) {
        const errorR = (currentRgb.r - matched.rgb.r) * ditherAmount;
        const errorG = (currentRgb.g - matched.rgb.g) * ditherAmount;
        const errorB = (currentRgb.b - matched.rgb.b) * ditherAmount;

        const diffuse = (targetX, targetY, factor) => {
          if (targetX < 0 || targetX >= width || targetY < 0 || targetY >= height) {
            return;
          }

          const targetIndex = (targetY * width + targetX) * 4;
          data[targetIndex] = clamp(data[targetIndex] + errorR * factor, 0, 255);
          data[targetIndex + 1] = clamp(data[targetIndex + 1] + errorG * factor, 0, 255);
          data[targetIndex + 2] = clamp(data[targetIndex + 2] + errorB * factor, 0, 255);
        };

        diffuse(x + 1, y, 7 / 16);
        diffuse(x - 1, y + 1, 3 / 16);
        diffuse(x, y + 1, 5 / 16);
        diffuse(x + 1, y + 1, 1 / 16);
      }
    }
  }

  return {
    width,
    height,
    cells,
    counts,
    cropRect: getCommittedCropRect(),
    mirrored: refs.mirrorPattern.checked,
  };
};

const drawPatternGrid = (ctx, pattern, options) => {
  const {
    left,
    top,
    cellSize,
    showSymbols = false,
    drawGrid = true,
    emptyColor = "#101116",
  } = options;

  for (let y = 0; y < pattern.height; y += 1) {
    for (let x = 0; x < pattern.width; x += 1) {
      const cell = pattern.cells[y * pattern.width + x];
      const cellLeft = left + x * cellSize;
      const cellTop = top + y * cellSize;

      ctx.fillStyle = cell ? cell.hex : emptyColor;
      ctx.fillRect(cellLeft, cellTop, cellSize, cellSize);

      if (drawGrid) {
        ctx.strokeStyle = "rgba(255,255,255,0.12)";
        ctx.strokeRect(cellLeft, cellTop, cellSize, cellSize);
      }

      if (showSymbols && cell) {
        ctx.fillStyle = cell.lab.l > 62 ? "#131417" : "#fbf7ef";
        ctx.font = `600 ${Math.max(10, Math.floor(cellSize * 0.42))}px Space Grotesk`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(cell.code, cellLeft + cellSize / 2, cellTop + cellSize / 2 + 1);
      }
    }
  }
};

const drawPatternPreview = () => {
  resizeCanvasToDisplaySize(refs.patternCanvas);
  clearCanvas(patternCtx, refs.patternCanvas);

  if (!state.pattern) {
    return;
  }

  const availableWidth = refs.patternCanvas.width - 24;
  const availableHeight = refs.patternCanvas.height - 24;
  const cellSize = Math.max(
    1,
    Math.floor(Math.min(availableWidth / state.pattern.width, availableHeight / state.pattern.height)),
  );
  const patternWidthPx = state.pattern.width * cellSize;
  const patternHeightPx = state.pattern.height * cellSize;
  const left = Math.floor((refs.patternCanvas.width - patternWidthPx) / 2);
  const top = Math.floor((refs.patternCanvas.height - patternHeightPx) / 2);
  const showSymbols = refs.showSymbols.checked && cellSize >= 18;

  patternCtx.fillStyle = "#16181f";
  patternCtx.fillRect(0, 0, refs.patternCanvas.width, refs.patternCanvas.height);
  drawPatternGrid(patternCtx, state.pattern, {
    left,
    top,
    cellSize,
    showSymbols,
    drawGrid: true,
  });
  drawMobileSetupPreview();
};

const renderMobilePreviewModeUi = () => {
  const showPattern = state.mobileSetupPreviewMode === "pattern";
  refs.mobilePreviewPatternBtn.classList.toggle(
    "mobile-preview-toggle-button-active",
    showPattern,
  );
  refs.mobilePreviewSourceBtn.classList.toggle(
    "mobile-preview-toggle-button-active",
    !showPattern,
  );
  refs.mobilePreviewPatternBtn.setAttribute("aria-pressed", String(showPattern));
  refs.mobilePreviewSourceBtn.setAttribute("aria-pressed", String(!showPattern));
};

const drawMobileSetupPreview = () => {
  renderMobilePreviewModeUi();
  resizeCanvasToDisplaySize(refs.mobilePreviewCanvas);
  clearCanvas(mobilePreviewCtx, refs.mobilePreviewCanvas);

  if (!state.image) {
    refs.mobilePreviewMeta.textContent = "Upload an image to preview changes";
    return;
  }

  if (state.mobileSetupPreviewMode === "source" || !state.pattern) {
    refs.mobilePreviewMeta.textContent = "Corrected source preview";
    drawSourcePreviewInto(mobilePreviewCtx, refs.mobilePreviewCanvas, {
      showCropOverlay: false,
    });
    return;
  }

  const availableWidth = refs.mobilePreviewCanvas.width - 20;
  const availableHeight = refs.mobilePreviewCanvas.height - 20;
  const cellSize = Math.max(
    1,
    Math.floor(Math.min(availableWidth / state.pattern.width, availableHeight / state.pattern.height)),
  );
  const patternWidthPx = state.pattern.width * cellSize;
  const patternHeightPx = state.pattern.height * cellSize;
  const left = Math.floor((refs.mobilePreviewCanvas.width - patternWidthPx) / 2);
  const top = Math.floor((refs.mobilePreviewCanvas.height - patternHeightPx) / 2);

  refs.mobilePreviewMeta.textContent = `${state.pattern.width} x ${state.pattern.height} live pattern`;
  mobilePreviewCtx.fillStyle = "#16181f";
  mobilePreviewCtx.fillRect(0, 0, refs.mobilePreviewCanvas.width, refs.mobilePreviewCanvas.height);
  drawPatternGrid(mobilePreviewCtx, state.pattern, {
    left,
    top,
    cellSize,
    showSymbols: refs.showSymbols.checked && cellSize >= 14,
    drawGrid: true,
  });
};

const renderLegend = () => {
  if (!state.pattern) {
    refs.legendMeta.textContent = "0 colors used";
    refs.legendList.className = "legend-list empty-state";
    refs.legendList.textContent = "Generate a pattern to see bead counts.";
    return;
  }

  const usedColors = getUsedColors(state.pattern);
  refs.legendMeta.textContent = `${usedColors.length} colors used`;
  refs.legendList.className = "legend-list";
  refs.legendList.innerHTML = usedColors
    .map(
      ({ color, count }) => {
        const inventory = getInventorySettings(color.id);
        const ownedCount =
          inventory.owned === "" || Number.isNaN(Number(inventory.owned))
            ? null
            : Math.max(0, Number(inventory.owned));
        const difference = ownedCount === null ? null : ownedCount - count;
        const statusLabel =
          difference === null
            ? "Inventory not set"
            : difference >= 0
              ? `${formatNumber(difference)} spare`
              : `Need ${formatNumber(Math.abs(difference))} more`;
        const statusClass =
          difference === null
            ? "inventory-status inventory-neutral"
            : difference >= 0
              ? "inventory-status inventory-ok"
              : "inventory-status inventory-short";

        return `
        <article class="legend-item ${inventory.lowInventory ? "legend-item-low" : ""}">
          <span class="swatch" style="background:${color.hex}"></span>
          <div class="legend-meta">
            <strong>${color.code} - ${color.name}</strong>
            <span>${color.hex.toUpperCase()}</span>
          </div>
          <div class="legend-side">
            <span class="legend-count">${formatNumber(count)} used</span>
            ${
              ownedCount === null
                ? '<span class="legend-note">Set inventory in Available bead colors.</span>'
                : `<span class="legend-note">Owned ${formatNumber(ownedCount)}${inventory.lowInventory ? " · low inventory" : ""}</span>`
            }
            <span class="${statusClass}">${statusLabel}</span>
          </div>
        </article>
      `;
      },
    )
    .join("");
};

const renderInstructions = () => {
  if (!state.pattern) {
    refs.instructionMeta.textContent = "Rows will appear here";
    refs.instructionList.className = "instruction-list empty-state";
    refs.instructionList.textContent = "Upload an image and click Generate pattern.";
    return;
  }

  const rows = getInstructionRows(state.pattern);
  refs.instructionMeta.textContent = `${rows.length} rows, left to right`;
  refs.instructionList.className = "instruction-list";
  refs.instructionList.innerHTML = rows
    .map(
      (row) => `
        <article class="instruction-row">
          <div class="instruction-row-top">
            <strong>Row ${String(row.rowNumber).padStart(2, "0")}</strong>
            <span class="instruction-row-meta">${row.chunkText}</span>
          </div>
          <div class="row-pattern">
            <code>${row.codeText}</code>
          </div>
        </article>
      `,
    )
    .join("");
};

const renderStats = () => {
  if (!state.pattern) {
    setStats([
      { label: "Pattern size", value: "Waiting for image" },
      { label: "Total beads", value: "-" },
      { label: "Rows", value: "-" },
      { label: "Distinct colors used", value: "-" },
    ]);
    return;
  }

  const { width, height, counts } = state.pattern;
  const totalBeads = [...counts.values()].reduce((sum, value) => sum + value, 0);

  setStats([
    { label: "Pattern size", value: `${width} x ${height} beads` },
    { label: "Total beads", value: formatNumber(totalBeads) },
    { label: "Rows", value: formatNumber(height) },
    { label: "Distinct colors used", value: formatNumber(counts.size) },
  ]);
};

const generatePattern = () => {
  if (!state.image) {
    refs.patternMeta.textContent = "Upload an image first";
    return;
  }

  state.pattern = makePattern();
  renderPalette();
  drawPatternPreview();
  renderStats();
  renderLegend();
  renderInstructions();

  refs.patternMeta.textContent = `${state.pattern.width} x ${state.pattern.height} beads`;
  if (state.pattern.mirrored) {
    refs.patternMeta.textContent += " | mirrored";
  }
};

const syncAspectFromWidth = () => {
  if (!state.image || !refs.lockAspect.checked) {
    return;
  }

  const source = getCropSourceDimensions();
  const ratio = source.height / source.width;
  refs.patternHeight.value = String(
    clamp(Math.round(Number(refs.patternWidth.value || 64) * ratio), 8, 220),
  );
};

const syncAspectFromHeight = () => {
  if (!state.image || !refs.lockAspect.checked) {
    return;
  }

  const source = getCropSourceDimensions();
  const ratio = source.width / source.height;
  refs.patternWidth.value = String(
    clamp(Math.round(Number(refs.patternHeight.value || 64) * ratio), 8, 220),
  );
};

const resetCrop = (regenerate = true) => {
  if (!state.image) {
    return;
  }

  if (state.cropToolOpen) {
    state.cropDraftRect = createFullCropRect();
  } else {
    state.cropRect = createFullCropRect();
    state.cropDraftRect = null;
  }
  state.cropStartPoint = null;
  state.cropMoveOrigin = null;
  state.cropPointerOffset = null;
  state.cropResizeHandle = null;
  state.cropResizeAnchor = null;
  drawImagePreview();

  if (!state.cropToolOpen && refs.lockAspect.checked) {
    syncAspectFromWidth();
  }

  if (!state.cropToolOpen && regenerate) {
    generatePattern();
  }
};

const finishCrop = () => {
  if (state.activePointerId !== null && refs.sourceCanvas.hasPointerCapture?.(state.activePointerId)) {
    refs.sourceCanvas.releasePointerCapture(state.activePointerId);
  }
  state.activePointerId = null;

  if (!state.image) {
    return;
  }

  if (state.cropMoveOrigin && state.cropDraftRect) {
    state.cropDraftRect = {
      x: Math.round(state.cropDraftRect.x),
      y: Math.round(state.cropDraftRect.y),
      width: Math.round(state.cropDraftRect.width),
      height: Math.round(state.cropDraftRect.height),
    };
    state.cropDraftRect = null;
    state.cropStartPoint = null;
    state.cropMoveOrigin = null;
    state.cropPointerOffset = null;
    state.cropResizeHandle = null;
    state.cropResizeAnchor = null;
    drawImagePreview();
    return;
  }

  if (!state.cropDraftRect) {
    return;
  }

  const snappedCropRect = snapCropRectToEdges(state.cropDraftRect);

  if (!snappedCropRect || snappedCropRect.width < 4 || snappedCropRect.height < 4) {
    state.cropStartPoint = null;
    state.cropMoveOrigin = null;
    state.cropPointerOffset = null;
    state.cropResizeHandle = null;
    state.cropResizeAnchor = null;
    drawImagePreview();
    return;
  }

  state.cropDraftRect = {
    x: Math.round(snappedCropRect.x),
    y: Math.round(snappedCropRect.y),
    width: Math.round(snappedCropRect.width),
    height: Math.round(snappedCropRect.height),
  };
  state.cropStartPoint = null;
  state.cropMoveOrigin = null;
  state.cropPointerOffset = null;
  state.cropResizeHandle = null;
  state.cropResizeAnchor = null;
  drawImagePreview();
};

const clearCropInteractionState = () => {
  if (state.activePointerId !== null && refs.sourceCanvas.hasPointerCapture?.(state.activePointerId)) {
    refs.sourceCanvas.releasePointerCapture(state.activePointerId);
  }
  state.activePointerId = null;
  state.cropStartPoint = null;
  state.cropMoveOrigin = null;
  state.cropPointerOffset = null;
  state.cropResizeHandle = null;
  state.cropResizeAnchor = null;
};

const openCropTool = () => {
  if (!state.image) {
    return;
  }

  clearCropInteractionState();
  state.cropToolOpen = true;
  const currentCrop = getCommittedCropRect();
  state.cropDraftRect = currentCrop ? { ...currentCrop } : createFullCropRect();
  updateCropUi();
  requestAnimationFrame(() => {
    drawImagePreview();
  });
};

const cancelCropTool = () => {
  clearCropInteractionState();
  state.cropToolOpen = false;
  state.cropDraftRect = null;
  updateCropUi();
  requestAnimationFrame(() => {
    drawImagePreview();
  });
};

const saveCropTool = () => {
  if (!state.image) {
    return;
  }

  const draftCrop = state.cropDraftRect || getCommittedCropRect();
  const nextCrop = snapCropRectToEdges(draftCrop) || createFullCropRect();

  state.cropRect = {
    x: Math.round(nextCrop.x),
    y: Math.round(nextCrop.y),
    width: Math.round(nextCrop.width),
    height: Math.round(nextCrop.height),
  };
  clearCropInteractionState();
  state.cropToolOpen = false;
  state.cropDraftRect = null;

  if (refs.lockAspect.checked) {
    syncAspectFromWidth();
  }

  updateCropUi();
  requestAnimationFrame(() => {
    drawImagePreview();
  });
  generatePattern();
};

const startCrop = (event) => {
  if (!state.image || !isCropEditingEnabled()) {
    return;
  }

  state.activePointerId = event.pointerId;
  const canvasPoint = getCanvasPointer(event, refs.sourceCanvas);
  const point = canvasPointToImagePoint(canvasPoint);
  if (!point) {
    return;
  }

  const currentCrop = getEditableCropRect() || createFullCropRect();
  const resizeHandle = !isFullCropRect(currentCrop)
    ? getCropHandleAtCanvasPoint(canvasPoint, currentCrop)
    : null;

  if (resizeHandle) {
    state.cropResizeHandle = resizeHandle;
    state.cropResizeAnchor = getResizeAnchorForHandle(currentCrop, resizeHandle);
    state.cropMoveOrigin = null;
    state.cropPointerOffset = null;
    state.cropDraftRect = { ...currentCrop };
    state.cropStartPoint = state.cropResizeAnchor;
    refs.sourceCanvas.setPointerCapture(event.pointerId);
    drawImagePreview();
    return;
  }

  if (!isFullCropRect(currentCrop) && isPointInsideCropRect(point, currentCrop)) {
    state.cropMoveOrigin = currentCrop;
    state.cropPointerOffset = {
      x: point.x - currentCrop.x,
      y: point.y - currentCrop.y,
    };
    state.cropResizeHandle = null;
    state.cropResizeAnchor = null;
    state.cropDraftRect = { ...currentCrop };
    state.cropStartPoint = point;
    refs.sourceCanvas.setPointerCapture(event.pointerId);
    drawImagePreview();
    return;
  }

  state.cropStartPoint = point;
  state.cropMoveOrigin = null;
  state.cropPointerOffset = null;
  state.cropResizeHandle = null;
  state.cropResizeAnchor = null;
  state.cropDraftRect = {
    x: point.x,
    y: point.y,
    width: 1,
    height: 1,
  };
  refs.sourceCanvas.setPointerCapture(event.pointerId);
  drawImagePreview();
};

const moveCrop = (event) => {
  if (!state.image) {
    return;
  }

  const canvasPoint = getCanvasPointer(event, refs.sourceCanvas);
  if (!state.cropStartPoint) {
    if (isCropEditingEnabled()) {
      updateCropCursor(canvasPoint);
    } else {
      refs.sourceCanvas.style.cursor = "default";
    }
    return;
  }

  const point = state.cropMoveOrigin
    || state.cropResizeHandle
    ? canvasPointToImagePointClamped(canvasPoint)
    : canvasPointToImagePoint(canvasPoint);
  if (!point) {
    return;
  }

  if (state.cropMoveOrigin && state.cropPointerOffset) {
    state.cropDraftRect = moveCropRect(
      state.cropMoveOrigin,
      point.x - state.cropPointerOffset.x,
      point.y - state.cropPointerOffset.y,
    );
  } else if (state.cropResizeHandle && state.cropResizeAnchor) {
    state.cropDraftRect = constrainCropRectToRatio(state.cropResizeAnchor, point);
  } else {
    state.cropDraftRect = constrainCropRectToRatio(state.cropStartPoint, point);
  }
  drawImagePreview();
};

const loadImageFile = (file) => {
  const reader = new FileReader();

  reader.onload = () => {
    const image = new Image();

    image.onload = () => {
      state.cropToolOpen = false;
      state.image = image;
      state.imageName = file.name;
      state.imageWidth = image.width;
      state.imageHeight = image.height;
      state.cropRect = createFullCropRect();
      state.cropDraftRect = null;
      state.cropStartPoint = null;
      state.cropMoveOrigin = null;
      state.cropPointerOffset = null;
      state.cropResizeHandle = null;
      state.cropResizeAnchor = null;
      syncAspectFromWidth();
      drawImagePreview();
      generatePattern();
      updateCropUi();
    };

    image.src = reader.result;
  };

  reader.readAsDataURL(file);
};

const triggerCanvasDownload = (canvas, filename) => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
};

const downloadPatternOnly = () => {
  if (!state.pattern) {
    return;
  }

  const safeName = (state.imageName || "pattern").replace(/\.[^/.]+$/, "");
  const cellSize = Math.max(12, Math.min(28, Math.floor(1800 / state.pattern.width)));
  const canvas = document.createElement("canvas");
  canvas.width = state.pattern.width * cellSize + 32;
  canvas.height = state.pattern.height * cellSize + 32;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#16181f";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawPatternGrid(ctx, state.pattern, {
    left: 16,
    top: 16,
    cellSize,
    showSymbols: refs.showSymbols.checked && cellSize >= 12,
    drawGrid: true,
  });

  triggerCanvasDownload(canvas, `${safeName}-pixelated-pattern.png`);
};

const wrapText = (ctx, text, maxWidth) => {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(candidate).width <= maxWidth) {
      currentLine = candidate;
    } else {
      if (currentLine) {
        lines.push(currentLine);
      }
      currentLine = word;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.length ? lines : [text];
};

const drawCard = (ctx, x, y, width, height) => {
  ctx.fillStyle = "#171a21";
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, 24);
  ctx.fill();
  ctx.stroke();
};

const exportInstructionSheet = () => {
  if (!state.pattern || !state.image) {
    return;
  }

  const safeName = (state.imageName || "pattern").replace(/\.[^/.]+$/, "");
  const cropRect = getCommittedCropRect();
  const usedColors = getUsedColors(state.pattern);
  const instructionRows = getInstructionRows(state.pattern);

  const exportWidth = 1800;
  const padding = 72;
  const sectionGap = 36;
  const cardPadding = 28;
  const contentWidth = exportWidth - padding * 2 - cardPadding * 2;
  const sourceFit = fitBox(cropRect.width, cropRect.height, contentWidth, 420);
  const previewCell = Math.max(4, Math.min(18, Math.floor(contentWidth / state.pattern.width)));
  const previewWidth = state.pattern.width * previewCell;
  const previewHeight = state.pattern.height * previewCell;
  const legendColumns = usedColors.length > 18 ? 3 : 2;
  const legendRows = Math.ceil(usedColors.length / legendColumns);
  const legendRowHeight = 42;

  const measureCanvas = document.createElement("canvas");
  measureCanvas.width = exportWidth;
  measureCanvas.height = 200;
  const measureCtx = measureCanvas.getContext("2d");
  measureCtx.font = '28px "IBM Plex Sans", sans-serif';

  const preparedRows = instructionRows.map((row) => ({
    ...row,
    wrappedLines: wrapText(measureCtx, row.chunkText, contentWidth - 250),
  }));

  const instructionHeight = preparedRows.reduce(
    (total, row) => total + Math.max(54, row.wrappedLines.length * 30 + 20),
    0,
  );

  const headerHeight = 170;
  const sourceCardHeight = cardPadding * 2 + 64 + sourceFit.height;
  const previewCardHeight = cardPadding * 2 + 64 + previewHeight;
  const legendCardHeight = cardPadding * 2 + 72 + legendRows * legendRowHeight;
  const instructionCardHeight = cardPadding * 2 + 72 + instructionHeight;
  const exportHeight =
    padding * 2 +
    headerHeight +
    sectionGap * 4 +
    sourceCardHeight +
    previewCardHeight +
    legendCardHeight +
    instructionCardHeight;

  const canvas = document.createElement("canvas");
  canvas.width = exportWidth;
  canvas.height = exportHeight;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#0f1117";
  ctx.fillRect(0, 0, exportWidth, exportHeight);

  let currentY = padding;

  ctx.fillStyle = "#f4f0ea";
  ctx.font = '700 68px "Space Grotesk", sans-serif';
  ctx.fillText("Fuse Bead Pattern Sheet", padding, currentY + 64);

  ctx.font = '32px "IBM Plex Sans", sans-serif';
  ctx.fillStyle = "#b5b1ab";
  ctx.fillText(
    `${safeName} | ${state.pattern.width} x ${state.pattern.height} beads`,
    padding,
    currentY + 110,
  );
  ctx.fillText(
    `${formatNumber([...state.pattern.counts.values()].reduce((sum, value) => sum + value, 0))} total beads | ${usedColors.length} colors used`,
    padding,
    currentY + 150,
  );

  currentY += headerHeight + sectionGap;

  drawCard(canvas.getContext("2d"), padding, currentY, exportWidth - padding * 2, sourceCardHeight);
  ctx.fillStyle = "#f4f0ea";
  ctx.font = '700 34px "Space Grotesk", sans-serif';
  ctx.fillText("Cropped source image", padding + cardPadding, currentY + 52);
  ctx.drawImage(
    state.image,
    cropRect.x,
    cropRect.y,
    cropRect.width,
    cropRect.height,
    padding + cardPadding,
    currentY + 80,
    sourceFit.width,
    sourceFit.height,
  );

  currentY += sourceCardHeight + sectionGap;

  drawCard(canvas.getContext("2d"), padding, currentY, exportWidth - padding * 2, previewCardHeight);
  ctx.fillStyle = "#f4f0ea";
  ctx.font = '700 34px "Space Grotesk", sans-serif';
  ctx.fillText("Pixelated bead preview", padding + cardPadding, currentY + 52);
  drawPatternGrid(ctx, state.pattern, {
    left: padding + cardPadding,
    top: currentY + 80,
    cellSize: previewCell,
    showSymbols: refs.showSymbols.checked && previewCell >= 12,
    drawGrid: true,
  });

  currentY += previewCardHeight + sectionGap;

  drawCard(canvas.getContext("2d"), padding, currentY, exportWidth - padding * 2, legendCardHeight);
  ctx.fillStyle = "#f4f0ea";
  ctx.font = '700 34px "Space Grotesk", sans-serif';
  ctx.fillText("Legend and bead counts", padding + cardPadding, currentY + 52);

  usedColors.forEach(({ color, count }, index) => {
    const column = index % legendColumns;
    const row = Math.floor(index / legendColumns);
    const columnWidth = contentWidth / legendColumns;
    const left = padding + cardPadding + column * columnWidth;
    const top = currentY + 88 + row * legendRowHeight;

    ctx.fillStyle = color.hex;
    ctx.beginPath();
    ctx.arc(left + 14, top + 8, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#f4f0ea";
    ctx.font = '700 24px "Space Grotesk", sans-serif';
    ctx.fillText(`${color.code} - ${color.name}`, left + 40, top + 12);
    ctx.fillStyle = "#b5b1ab";
    ctx.font = '24px "IBM Plex Sans", sans-serif';
    ctx.fillText(`${formatNumber(count)} beads`, left + 40, top + 36);
  });

  currentY += legendCardHeight + sectionGap;

  drawCard(
    canvas.getContext("2d"),
    padding,
    currentY,
    exportWidth - padding * 2,
    instructionCardHeight,
  );
  ctx.fillStyle = "#f4f0ea";
  ctx.font = '700 34px "Space Grotesk", sans-serif';
  ctx.fillText("Build by rows", padding + cardPadding, currentY + 52);

  let instructionY = currentY + 92;
  preparedRows.forEach((row) => {
    const rowHeight = Math.max(54, row.wrappedLines.length * 30 + 20);
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    ctx.fillRect(padding + cardPadding, instructionY, contentWidth, rowHeight - 6);

    ctx.fillStyle = "#ffcfac";
    ctx.font = '700 24px "Space Grotesk", sans-serif';
    ctx.fillText(
      `Row ${String(row.rowNumber).padStart(2, "0")}`,
      padding + cardPadding + 18,
      instructionY + 30,
    );

    ctx.fillStyle = "#f4f0ea";
    ctx.font = '24px "IBM Plex Sans", sans-serif';
    row.wrappedLines.forEach((line, index) => {
      ctx.fillText(line, padding + cardPadding + 180, instructionY + 30 + index * 28);
    });

    instructionY += rowHeight;
  });

  triggerCanvasDownload(canvas, `${safeName}-instruction-sheet.png`);
};

refs.imageUpload.addEventListener("change", (event) => {
  const [file] = event.target.files || [];
  if (file) {
    loadImageFile(file);
  }
});

const handlePatternWidthChange = () => {
  syncAspectFromWidth();
  if (state.image) {
    drawImagePreview();
    generatePattern();
  }
};

const handlePatternHeightChange = () => {
  syncAspectFromHeight();
  if (state.image) {
    drawImagePreview();
    generatePattern();
  }
};

refs.patternWidth.addEventListener("input", handlePatternWidthChange);
refs.patternWidth.addEventListener("change", handlePatternWidthChange);

refs.patternHeight.addEventListener("input", handlePatternHeightChange);
refs.patternHeight.addEventListener("change", handlePatternHeightChange);

refs.showSymbols.addEventListener("change", drawPatternPreview);
refs.mirrorPattern.addEventListener("change", () => {
  if (state.image) {
    generatePattern();
  }
});
refs.backgroundMode.addEventListener("change", () => {
  if (state.image) {
    generatePattern();
  }
});
refs.ditherStrength.addEventListener("change", () => {
  if (state.image) {
    generatePattern();
  }
});
refs.matchingMode.addEventListener("change", () => {
  if (state.image) {
    generatePattern();
  }
});
refs.inventoryBalancing.addEventListener("change", () => {
  savePreferences();
  if (state.image) {
    generatePattern();
  }
});
[
  refs.hueShift,
  refs.brightnessBoost,
  refs.saturationBoost,
  refs.shadowLift,
  refs.highlightRecovery,
].forEach((control) => {
  control.addEventListener("input", () => {
    updateAdjustmentLabels();
    scheduleImageAdjustmentApply();
  });

  control.addEventListener("change", () => {
    updateAdjustmentLabels();
    if (state.adjustmentApplyTimer) {
      window.clearTimeout(state.adjustmentApplyTimer);
      state.adjustmentApplyTimer = null;
    }
    applyImageAdjustmentChanges();
  });
});
refs.resetAdjustmentsBtn.addEventListener("click", resetAdjustments);
refs.palettePreset.addEventListener("change", () => {
  applyPalettePreset(refs.palettePreset.value);
});
refs.mobilePreviewPatternBtn.addEventListener("click", () => {
  state.mobileSetupPreviewMode = "pattern";
  drawMobileSetupPreview();
});
refs.mobilePreviewSourceBtn.addEventListener("click", () => {
  state.mobileSetupPreviewMode = "source";
  drawMobileSetupPreview();
});
refs.mobileViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextView = button.dataset.mobileViewTrigger;
    if (!nextView) {
      return;
    }
    setMobileView(nextView);
  });
});
refs.lockAspect.addEventListener("change", () => {
  if (refs.lockAspect.checked) {
    syncAspectFromWidth();
  }
});
refs.generateBtn.addEventListener("click", () => {
  generatePattern();
  if (state.image && isMobileLayout()) {
    setMobileView("pattern");
  }
});
refs.downloadBtn.addEventListener("click", downloadPatternOnly);
refs.exportSheetBtn.addEventListener("click", exportInstructionSheet);
refs.openCropToolBtn.addEventListener("click", openCropTool);
refs.saveCropBtn.addEventListener("click", saveCropTool);
refs.cancelCropBtn.addEventListener("click", cancelCropTool);
refs.resetCropBtn.addEventListener("click", () => resetCrop());
refs.cropToolBackdrop.addEventListener("click", cancelCropTool);
refs.resetPaletteBtn.addEventListener("click", () => {
  state.activePaletteIds = new Set(getPaletteEntries().map((entry) => entry.id));
  updatePaletteCounter();
  savePreferences();
  renderPalette();
  if (state.image) {
    generatePattern();
  }
});
refs.customColorPicker.addEventListener("input", () => {
  refs.customColorHex.value = refs.customColorPicker.value;
});
refs.customColorHex.addEventListener("input", () => {
  const normalized = normalizeHexColor(refs.customColorHex.value);
  if (normalized) {
    refs.customColorPicker.value = normalized;
  }
});
refs.addCustomColorBtn.addEventListener("click", addCustomColor);

refs.sourceCanvas.addEventListener("pointerdown", startCrop);
refs.sourceCanvas.addEventListener("pointermove", moveCrop);
refs.sourceCanvas.addEventListener("pointerup", finishCrop);
refs.sourceCanvas.addEventListener("pointercancel", () => {
  clearCropInteractionState();
  if (state.cropToolOpen && !state.cropDraftRect) {
    state.cropDraftRect = { ...getCommittedCropRect() };
  }
  drawImagePreview();
  updateCropUi();
});
refs.sourceCanvas.addEventListener("pointerleave", () => {
  if (!state.cropStartPoint) {
    refs.sourceCanvas.style.cursor = isCropEditingEnabled() ? "crosshair" : "default";
  }
});

window.addEventListener("resize", () => {
  renderMobileView();
  drawImagePreview();
  drawPatternPreview();
  drawMobileSetupPreview();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.cropToolOpen) {
    cancelCropTool();
  }
});

clearCanvas(sourceCtx, refs.sourceCanvas);
clearCanvas(patternCtx, refs.patternCanvas);
loadPreferences();
refreshPalettePresetUi();
renderPalette();
updatePaletteCounter();
renderStats();
renderLegend();
renderInstructions();
updateAdjustmentLabels();
refreshImageMeta();
renderMobileView();
updateCropUi();
drawMobileSetupPreview();
