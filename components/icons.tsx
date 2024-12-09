import { cn } from "@/lib/utils";
import { SVGProps } from "react";

export const Icons = {
  nextJS: (props?: SVGProps<any>) => (
    <svg
      className={props?.className}
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"
      ></path>
    </svg>
  ),
  nuxt: (props?: SVGProps<any>) => (
    <svg
      className={props?.className}
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M200.662 81.35L0 430.65h130.774l139.945-239.803zm134.256 40.313l-39.023 69.167l138.703 239.82H512zm-51.596 91.052L155.924 430.651h253.485z"
      ></path>
    </svg>
  ),
  typescript: (props?: SVGProps<any>) => (
    <svg
      fill="currentColor"
      width="1.0rem"
      height="1.0rem"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
    </svg>
  ),
  svelteKit: (props?: SVGProps<any>) => (
    <svg
      className={props?.className}
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 426 512"
    >
      <path
        fill="currentColor"
        d="M403.508 229.23C491.235 87.7 315.378-58.105 190.392 23.555L71.528 99.337c-57.559 37.487-82.55 109.513-47.45 183.53c-87.761 133.132 83.005 289.03 213.116 205.762l118.864-75.782c64.673-42.583 79.512-116.018 47.45-183.616m-297.592-80.886l118.69-75.739c77.973-46.679 167.756 34.942 135.388 110.992c-19.225-15.274-40.65-24.665-56.923-28.894c6.186-24.57-22.335-42.796-42.174-30.106l-118.95 75.48c-29.411 20.328 1.946 62.138 31.014 44.596l45.33-28.895c101.725-57.403 198 80.425 103.38 147.975l-118.692 75.739C131.455 485.225 34.11 411.96 67.592 328.5c17.786 13.463 36.677 23.363 56.923 28.894c-4.47 28.222 24.006 41.943 42.476 30.365L285.64 312.02c29.28-21.955-2.149-61.692-30.97-44.595l-45.504 28.894c-100.56 58.77-199.076-80.42-103.25-147.975"
      ></path>
    </svg>
  ),
  solidStart: (props?: SVGProps<any>) => (
    <svg
      className={props?.className}
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 128 128"
    >
      <path
        fill="currentColor"
        d="M61.832 4.744c-3.205.058-6.37.395-9.45 1.07l-2.402.803c-4.806 1.603-8.813 4.005-11.216 7.21l-1.602 2.404l-12.017 20.828l.166.031c-4.785 5.823-5.007 14.07-.166 21.6c1.804 2.345 4.073 4.431 6.634 6.234l-15.445 4.982L.311 97.946s42.46 32.044 75.306 24.033l2.403-.801c5.322-1.565 9.292-4.48 11.683-8.068l.334.056l16.022-28.84c3.204-5.608 2.404-12.016-1.602-18.425a36 36 0 0 0-7.059-6.643l15.872-5.375l14.42-24.033S92.817 4.19 61.831 4.744z"
      ></path>
    </svg>
  ),
  react: (props?: SVGProps<any>) => (
    <svg
      className={props?.className}
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.315 1.837c-.4-.116-.695-.085-.91.032c-.216.116-.404.347-.526.745c-.122.401-.163.936-.104 1.582q.015.157.037.321a14 14 0 0 1 1.676-.311a13 13 0 0 1 1.275-1.54l-.066-.053c-.508-.402-.98-.66-1.382-.776m2.185.14q-.09-.076-.182-.148C6.746 1.377 6.16 1.04 5.594.876C5.024.711 4.441.711 3.928.99s-.833.767-1.005 1.334c-.172.564-.21 1.238-.144 1.965q.023.255.065.523q-.256.09-.49.192c-.671.287-1.246.642-1.66 1.062C.278 6.487 0 7 0 7.584S.278 8.68.694 9.103c.414.42.989.774 1.66 1.062q.235.1.49.192a9 9 0 0 0-.065.523c-.066.726-.028 1.4.144 1.965c.172.567.492 1.056 1.005 1.333c.513.278 1.097.279 1.666.114c.566-.165 1.152-.5 1.724-.953l.182-.149q.09.076.182.149c.572.452 1.158.788 1.724.953c.569.165 1.153.164 1.666-.114c.513-.277.833-.766 1.005-1.333c.172-.564.21-1.239.144-1.965a9 9 0 0 0-.065-.523q.255-.09.49-.192c.671-.288 1.246-.643 1.66-1.062c.416-.422.694-.936.694-1.52c0-.582-.278-1.096-.694-1.518c-.414-.42-.989-.775-1.66-1.062a9 9 0 0 0-.49-.192q.04-.268.065-.523c.066-.727.028-1.4-.144-1.965c-.172-.567-.492-1.056-1.005-1.334S9.975.711 9.406.876c-.566.164-1.152.5-1.724.953zm0 1.365q-.338.346-.672.755a17 17 0 0 1 1.344 0a11 11 0 0 0-.672-.755m2.012.864c-.41-.574-.84-1.092-1.275-1.54l.065-.053c.51-.402.98-.66 1.383-.776c.399-.116.695-.085.91.032c.216.116.404.347.525.745c.122.401.164.936.105 1.582q-.015.158-.037.32a14 14 0 0 0-1.676-.31m-.563.944a15.6 15.6 0 0 0-2.898 0A15.6 15.6 0 0 0 4.72 7.584a15.7 15.7 0 0 0 1.33 2.433a15.6 15.6 0 0 0 2.9 0a15.6 15.6 0 0 0 1.33-2.433A15.7 15.7 0 0 0 8.95 5.15m1.824 1.138a17 17 0 0 0-.527-.956q.39.075.752.168q-.094.385-.225.788m0 2.591a17 17 0 0 1-.527.957q.39-.075.752-.169a12 12 0 0 0-.225-.788m1.18.487a14 14 0 0 0-.588-1.782c.246-.61.443-1.209.588-1.782q.154.058.3.12c.596.256 1.047.547 1.341.845c.292.296.406.572.406.817s-.114.52-.406.816c-.294.299-.745.59-1.341.846a8 8 0 0 1-.3.12m-.765 1.285a14 14 0 0 1-1.676.311c-.41.574-.84 1.091-1.275 1.54l.066.052c.508.403.98.66 1.382.777c.399.116.695.085.91-.032s.404-.348.525-.746c.123-.4.164-.936.105-1.582a7 7 0 0 0-.037-.32M7.5 11.826q.338-.346.672-.755a17 17 0 0 1-1.344 0q.334.408.672.755m-2.746-1.99a17 17 0 0 1-.527-.957q-.13.404-.225.788q.361.094.752.169m-.942.815a14 14 0 0 0 1.676.311c.41.574.839 1.091 1.275 1.54l-.066.052c-.508.403-.98.66-1.382.777c-.4.116-.695.085-.911-.032s-.403-.348-.525-.746c-.122-.4-.163-.936-.104-1.582a8 8 0 0 1 .037-.32m-.765-1.285c.145-.574.341-1.172.588-1.782a14 14 0 0 1-.588-1.782q-.155.058-.3.12c-.596.256-1.047.547-1.341.845c-.292.296-.406.572-.406.817s.114.52.406.816c.294.299.745.59 1.341.846q.146.061.3.12m.955-3.865q.094.384.225.787a17 17 0 0 1 .527-.956q-.39.075-.752.169M6 7.584a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  hono: (props?: SVGProps<any>) => (
    <svg
      className={cn(props?.className)}
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 256 330"
    >
      <path
        className="fill-foreground"
        d="M134.129.029q1.315-.17 2.319.662a1256 1256 0 0 1 69.573 93.427q24.141 36.346 41.082 76.862q27.055 72.162-28.16 125.564q-48.313 40.83-111.318 31.805q-75.312-15.355-102.373-87.133Q-1.796 217.85.614 193.51q4.014-41.896 19.878-80.838q6.61-15.888 17.228-29.154a382 382 0 0 1 16.565 21.203q3.66 3.825 7.62 7.289Q92.138 52.013 134.13.029"
        opacity=".993"
      ></path>
      <path
        className="fill-muted-foreground"
        d="M129.49 53.7q36.47 42.3 65.93 90.114a187.3 187.3 0 0 1 15.24 33.13q12.507 49.206-26.836 81.169q-38.05 26.774-83.488 15.902q-48.999-15.205-56.653-65.929q-1.857-15.993 3.314-31.142a225.4 225.4 0 0 1 17.89-35.78l19.878-29.155a5510 5510 0 0 0 44.726-58.31"
      ></path>
    </svg>
  ),
  astro: (props?: SVGProps<any>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width="1.2em"
      height="1.2em"
      viewBox="0 0 128 128"
    >
      <path
        className="fill-foreground"
        d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90 90 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.1 90.1 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8 8 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a8 8 0 0 1 3.242 2.402Zm2.59 80.61c-3.57 3.054-10.696 5.136-18.903 5.136c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.67 5.67 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.6 11.6 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.5 15.5 0 0 0 1.875-7.41a15.6 15.6 0 0 0-.734-4.735Zm0 0"
      ></path>
    </svg>
  ),
  vue: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
    >
      <path
        className="fill-foreground"
        d="M1.001 3h4l7 12l7-12h4l-11 19zm8.667 0L12 7l2.333-4h4.035L12 14L5.633 3z"
      ></path>
    </svg>
  ),
  express: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <g fill="none">
        <rect
          width="256"
          height="256"
          className="fill-foreground"
          rx="60"
        ></rect>
        <path
          className="fill-background"
          d="M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972a52.26 52.26 0 0 1-60.884-7.784a54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"
        ></path>
      </g>
    </svg>
  ),
  javascript: (props?: SVGProps<any>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        className="fill-foreground"
        d="M32 32v448h448V32Zm240 348c0 43.61-25.76 64.87-63.05 64.87c-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65c12 0 21.86-5.41 21.86-26.46V240h44Zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56c17.44 0 27.57-7.72 27.57-19.75c0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45c0-31.57 24.05-54.63 61.64-54.63c26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18c-12.33 0-20.15 7.82-20.15 18c0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16c.01 37.9-29.76 57.64-69.76 57.64"
      ></path>
    </svg>
  ),
  node: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 4.213L7.5.42L1 4.213v6.574l1.006.587l2.057-.832A1.5 1.5 0 0 0 5 9.152V4h1v5.152a2.5 2.5 0 0 1-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792zM7 6a2 2 0 0 1 2-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0 0 10.167 5H9a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  book: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94c.98-.25 2.02-.36 3.02-.36c1.56 0 3.22.26 4.56.92c.6.3 1.28.3 1.87 0c1.34-.67 3-.92 4.56-.92c1 0 2.04.11 3.02.36c1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85c-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98c-.75-.14-1.53-.2-2.3-.2c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c.92 0 1.83.09 2.7.28c.46.1.8.51.8.98z"
      ></path>
      <path
        fill="currentColor"
        d="M13.98 11.01c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.54-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39c-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03"
      ></path>
    </svg>
  ),
  remix: () => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 412 474"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M393.946 364.768C398.201 419.418 398.201 445.036 398.201 473H271.756C271.756 466.909 271.865 461.337 271.975 455.687C272.317 438.123 272.674 419.807 269.828 382.819C266.067 328.667 242.748 316.634 199.871 316.634H161.883H1V218.109H205.889C260.049 218.109 287.13 201.633 287.13 158.011C287.13 119.654 260.049 96.4098 205.889 96.4098H1V0H228.456C351.069 0 412 57.9117 412 150.42C412 219.613 369.123 264.739 311.201 272.26C360.096 282.037 388.681 309.865 393.946 364.768Z"
        fill="white"
      />
      <path
        d="M1 473V399.553H134.697C157.029 399.553 161.878 416.116 161.878 425.994V473H1Z"
        fill="white"
      />
      <path
        d="M1 399.053H0.5V399.553V473V473.5H1H161.878H162.378V473V425.994C162.378 420.988 161.152 414.26 157.063 408.77C152.955 403.255 146.004 399.053 134.697 399.053H1Z"
        stroke="white"
        stroke-opacity="0.8"
      />
    </svg>
  ),
  google: (props: SVGProps<any>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="0.98em"
      height="1em"
      viewBox="0 0 256 262"
    >
      <path
        fill="currentColor"
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      />
      <path
        fill="currentColor"
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      />
      <path
        fill="currentColor"
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
      />
      <path
        fill="currentColor"
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      />
    </svg>
  ),
  microsft: (props: SVGProps<any>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M2 3h9v9H2zm9 19H2v-9h9zM21 3v9h-9V3zm0 19h-9v-9h9z"
      ></path>
    </svg>
  ),
};
