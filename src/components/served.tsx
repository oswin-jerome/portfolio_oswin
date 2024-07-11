import React from "react";

const Served = () => {
  return (
    <div className="py-12 mt-20">
      <h3 className="text-3xl font-bold text-center text-gray-800/70 dark:text-accent">Proudly Served</h3>
      <div className="flex gap-10 justify-center mt-6 text-accent/30">
        <svg version="1.1" className="h-8" id="Cognizant_Logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 820 189.56" enableBackground="new 0 0 820 189.56" xmlSpace="preserve">
          <path
            fill="currentColor"
            d="M469.219,114.094l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155h48.485v21.815h-81.749
L469.219,114.094z M435.418,16.295h24.783v22.429h-24.783V16.295z M435.082,46.217h24.785v90.146h-24.785V46.217z M135.318,91.019
c0.099-25.767,21.121-46.583,46.974-46.518c25.854,0.066,46.771,20.989,46.737,46.756c-0.032,25.765-21.001,46.638-46.855,46.638
c-12.465,0.018-24.42-4.922-33.217-13.722C140.16,115.372,135.25,103.438,135.318,91.019z M204.963,91.019
c0-12.801-10.132-23.453-22.79-23.453c-12.844,0-22.617,10.64-22.617,23.453c0,12.813,9.773,23.454,22.617,23.454
c12.658-0.02,22.796-10.653,22.796-23.454H204.963z M340.874,45.945h24.612v10.097c5.783-7.405,14.646-11.899,24.956-11.899
c21.354,0,34.198,13.702,34.198,36.957v54.991h-25.148V84.347c0-12.079-5.612-19.133-16.643-19.133
c-9.406,0-17.185,6.486-17.185,21.602v49.22h-24.771L340.874,45.945z M552.397,91.019c0-31.915,23.534-46.906,43.971-46.906
c11.766,0,20.986,4.32,26.951,10.641v-8.808h24.771v90.146h-24.771v-10.097c-5.965,7.03-15.557,11.9-27.311,11.9
C576.828,137.895,552.397,122.771,552.397,91.019z M624.031,90.84c0-13.344-9.768-24.163-23.155-24.163
c-13.75,0-24.239,10.275-24.239,24.163c0,13.885,10.489,24.335,24.239,24.335c13.401,0,23.167-10.998,23.167-24.335H624.031z
 M658.111,45.945h24.605v10.097c5.791-7.405,14.652-11.899,24.965-11.899c21.346,0,34.191,13.702,34.191,36.957v54.991h-25.15
V84.347c0-12.079-5.574-19.133-16.64-19.133c-9.408,0-17.187,6.486-17.187,21.602v49.22h-24.771L658.111,45.945z M469.219,136.091
v-21.997l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155 M108.879,90.234l-0.341,0.716
c-6.843,14.375-19.426,22.62-34.525,22.62c-21.893,0-39.016-17.243-39.016-39.253c0-22.571,17.005-39.586,39.56-39.586
c14.616,0,25.719,6.82,33.01,20.281l0.389,0.716l22.06-14.053l-0.371-0.618C118.186,21.61,97.588,10,74.557,10
C37.751,10,10,37.656,10,74.33c0,37.277,27.151,64.334,64.557,64.334c24.108,0,45.407-13.335,56.976-35.672l0.347-0.675
L108.879,90.234z M235.272,91.019c0-31.915,23.534-46.906,43.971-46.906c11.766,0,20.982,4.87,26.951,11.535v-9.702h24.771v87.64
c0,25.423-16.102,45.976-46.676,45.976c-22.976,0-39.797-11.906-47.066-25.966l21.893-12.257c4.7,9.374,13.005,15.325,25.143,15.325
c13.39,0,21.887-10.456,21.887-22.177v-8.492c-5.972,7.03-15.557,11.9-27.312,11.9C259.692,137.895,235.272,122.771,235.272,91.019z
 M306.906,90.84c0-13.344-9.766-24.163-23.156-24.163c-13.749,0-24.238,10.275-24.238,24.163c0,13.885,10.489,24.335,24.238,24.335
C297.141,115.175,306.906,104.177,306.906,90.84z M802.908,68.12V45.945h-17.005V16.209h-24.771v29.736h-15.391V68.12h15.359v28.849
c0,29.391,9.406,39.122,38.173,39.122h3.617v-23.076c-15.197,0-17.005-2.165-17.005-16.226V68.12H802.908z M808.167,26.967
c-1.184,1.188-2.796,1.857-4.478,1.857c-1.681,0-3.293-0.669-4.477-1.857c-1.21-1.175-1.883-2.793-1.859-4.475
c0.006-2.851,1.933-5.343,4.698-6.076c2.765-0.733,5.679,0.476,7.105,2.947c1.427,2.472,1.011,5.59-1.014,7.604H808.167z
 M799.844,18.666c-1.037,1.006-1.609,2.396-1.586,3.839c-0.023,1.448,0.545,2.842,1.574,3.864c1.019,1.023,2.405,1.599,3.852,1.599
s2.834-0.576,3.852-1.599c1.038-1.017,1.61-2.414,1.585-3.864c0.02-2.203-1.305-4.196-3.347-5.04
c-2.04-0.843-4.391-0.368-5.941,1.201H799.844z M803.56,19.018c0.642-0.033,1.284,0.051,1.895,0.247
c0.71,0.282,1.148,0.996,1.079,1.753c0.035,0.544-0.221,1.067-0.677,1.371c-0.308,0.177-0.649,0.29-1.002,0.333
c0.476,0.047,0.907,0.294,1.189,0.679c0.234,0.308,0.365,0.681,0.377,1.067v0.512c0,0.155,0,0.328,0,0.512
c0.002,0.121,0.02,0.243,0.055,0.358l0.044,0.087h-1.145c-0.004-0.023-0.004-0.045,0-0.068v-0.074v-0.222v-0.549
c0.083-0.608-0.168-1.214-0.657-1.586c-0.43-0.181-0.897-0.257-1.363-0.222h-0.965v2.722h-1.239v-6.919H803.56z M804.88,20.104
c-0.466-0.202-0.975-0.289-1.482-0.252h-1.046v2.505h1.109c0.395,0.019,0.787-0.033,1.164-0.154
c0.395-0.178,0.669-0.548,0.721-0.978C805.399,20.795,805.221,20.37,804.88,20.104z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Served;
