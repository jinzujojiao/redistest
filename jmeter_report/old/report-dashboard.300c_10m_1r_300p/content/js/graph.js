/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 115.0, "minX": 0.0, "maxY": 6156.0, "series": [{"data": [[0.0, 115.0], [0.1, 180.0], [0.2, 194.0], [0.3, 204.0], [0.4, 212.0], [0.5, 218.0], [0.6, 223.0], [0.7, 228.0], [0.8, 232.0], [0.9, 236.0], [1.0, 240.0], [1.1, 243.0], [1.2, 247.0], [1.3, 250.0], [1.4, 253.0], [1.5, 255.0], [1.6, 258.0], [1.7, 261.0], [1.8, 263.0], [1.9, 266.0], [2.0, 268.0], [2.1, 270.0], [2.2, 272.0], [2.3, 275.0], [2.4, 277.0], [2.5, 278.0], [2.6, 280.0], [2.7, 282.0], [2.8, 284.0], [2.9, 285.0], [3.0, 287.0], [3.1, 289.0], [3.2, 290.0], [3.3, 292.0], [3.4, 293.0], [3.5, 295.0], [3.6, 296.0], [3.7, 298.0], [3.8, 299.0], [3.9, 301.0], [4.0, 302.0], [4.1, 303.0], [4.2, 305.0], [4.3, 306.0], [4.4, 307.0], [4.5, 309.0], [4.6, 310.0], [4.7, 311.0], [4.8, 312.0], [4.9, 313.0], [5.0, 315.0], [5.1, 316.0], [5.2, 317.0], [5.3, 318.0], [5.4, 319.0], [5.5, 320.0], [5.6, 321.0], [5.7, 322.0], [5.8, 323.0], [5.9, 324.0], [6.0, 325.0], [6.1, 326.0], [6.2, 327.0], [6.3, 328.0], [6.4, 329.0], [6.5, 330.0], [6.6, 331.0], [6.7, 332.0], [6.8, 333.0], [6.9, 334.0], [7.0, 335.0], [7.1, 336.0], [7.2, 337.0], [7.3, 337.0], [7.4, 338.0], [7.5, 339.0], [7.6, 340.0], [7.7, 341.0], [7.8, 342.0], [7.9, 343.0], [8.0, 344.0], [8.1, 344.0], [8.2, 345.0], [8.3, 346.0], [8.4, 347.0], [8.5, 348.0], [8.6, 349.0], [8.7, 349.0], [8.8, 350.0], [8.9, 351.0], [9.0, 352.0], [9.1, 353.0], [9.2, 353.0], [9.3, 354.0], [9.4, 355.0], [9.5, 356.0], [9.6, 356.0], [9.7, 357.0], [9.8, 358.0], [9.9, 359.0], [10.0, 359.0], [10.1, 360.0], [10.2, 361.0], [10.3, 362.0], [10.4, 363.0], [10.5, 363.0], [10.6, 364.0], [10.7, 365.0], [10.8, 365.0], [10.9, 366.0], [11.0, 367.0], [11.1, 367.0], [11.2, 368.0], [11.3, 369.0], [11.4, 369.0], [11.5, 370.0], [11.6, 371.0], [11.7, 371.0], [11.8, 372.0], [11.9, 373.0], [12.0, 374.0], [12.1, 374.0], [12.2, 375.0], [12.3, 376.0], [12.4, 376.0], [12.5, 377.0], [12.6, 378.0], [12.7, 378.0], [12.8, 379.0], [12.9, 380.0], [13.0, 380.0], [13.1, 381.0], [13.2, 382.0], [13.3, 382.0], [13.4, 383.0], [13.5, 384.0], [13.6, 384.0], [13.7, 385.0], [13.8, 386.0], [13.9, 386.0], [14.0, 387.0], [14.1, 388.0], [14.2, 388.0], [14.3, 389.0], [14.4, 389.0], [14.5, 390.0], [14.6, 391.0], [14.7, 391.0], [14.8, 392.0], [14.9, 393.0], [15.0, 393.0], [15.1, 394.0], [15.2, 395.0], [15.3, 395.0], [15.4, 396.0], [15.5, 397.0], [15.6, 397.0], [15.7, 398.0], [15.8, 398.0], [15.9, 399.0], [16.0, 400.0], [16.1, 400.0], [16.2, 401.0], [16.3, 401.0], [16.4, 402.0], [16.5, 403.0], [16.6, 403.0], [16.7, 404.0], [16.8, 405.0], [16.9, 405.0], [17.0, 406.0], [17.1, 406.0], [17.2, 407.0], [17.3, 407.0], [17.4, 408.0], [17.5, 409.0], [17.6, 409.0], [17.7, 410.0], [17.8, 410.0], [17.9, 411.0], [18.0, 411.0], [18.1, 412.0], [18.2, 413.0], [18.3, 413.0], [18.4, 414.0], [18.5, 414.0], [18.6, 415.0], [18.7, 415.0], [18.8, 416.0], [18.9, 417.0], [19.0, 417.0], [19.1, 418.0], [19.2, 418.0], [19.3, 419.0], [19.4, 419.0], [19.5, 420.0], [19.6, 421.0], [19.7, 421.0], [19.8, 422.0], [19.9, 422.0], [20.0, 423.0], [20.1, 423.0], [20.2, 424.0], [20.3, 424.0], [20.4, 425.0], [20.5, 426.0], [20.6, 426.0], [20.7, 427.0], [20.8, 427.0], [20.9, 428.0], [21.0, 428.0], [21.1, 429.0], [21.2, 429.0], [21.3, 430.0], [21.4, 431.0], [21.5, 431.0], [21.6, 432.0], [21.7, 432.0], [21.8, 433.0], [21.9, 433.0], [22.0, 434.0], [22.1, 434.0], [22.2, 435.0], [22.3, 435.0], [22.4, 436.0], [22.5, 436.0], [22.6, 437.0], [22.7, 438.0], [22.8, 438.0], [22.9, 439.0], [23.0, 439.0], [23.1, 440.0], [23.2, 440.0], [23.3, 441.0], [23.4, 441.0], [23.5, 442.0], [23.6, 443.0], [23.7, 443.0], [23.8, 444.0], [23.9, 444.0], [24.0, 445.0], [24.1, 445.0], [24.2, 446.0], [24.3, 446.0], [24.4, 447.0], [24.5, 447.0], [24.6, 448.0], [24.7, 449.0], [24.8, 449.0], [24.9, 450.0], [25.0, 450.0], [25.1, 451.0], [25.2, 451.0], [25.3, 452.0], [25.4, 452.0], [25.5, 453.0], [25.6, 453.0], [25.7, 454.0], [25.8, 454.0], [25.9, 455.0], [26.0, 455.0], [26.1, 456.0], [26.2, 456.0], [26.3, 457.0], [26.4, 458.0], [26.5, 458.0], [26.6, 459.0], [26.7, 459.0], [26.8, 460.0], [26.9, 460.0], [27.0, 461.0], [27.1, 461.0], [27.2, 462.0], [27.3, 462.0], [27.4, 463.0], [27.5, 463.0], [27.6, 464.0], [27.7, 464.0], [27.8, 465.0], [27.9, 465.0], [28.0, 466.0], [28.1, 466.0], [28.2, 467.0], [28.3, 467.0], [28.4, 468.0], [28.5, 468.0], [28.6, 469.0], [28.7, 469.0], [28.8, 470.0], [28.9, 470.0], [29.0, 471.0], [29.1, 471.0], [29.2, 472.0], [29.3, 472.0], [29.4, 473.0], [29.5, 474.0], [29.6, 474.0], [29.7, 475.0], [29.8, 475.0], [29.9, 476.0], [30.0, 476.0], [30.1, 477.0], [30.2, 477.0], [30.3, 478.0], [30.4, 478.0], [30.5, 479.0], [30.6, 479.0], [30.7, 480.0], [30.8, 480.0], [30.9, 481.0], [31.0, 481.0], [31.1, 482.0], [31.2, 482.0], [31.3, 483.0], [31.4, 483.0], [31.5, 484.0], [31.6, 484.0], [31.7, 485.0], [31.8, 485.0], [31.9, 486.0], [32.0, 486.0], [32.1, 487.0], [32.2, 487.0], [32.3, 488.0], [32.4, 488.0], [32.5, 489.0], [32.6, 489.0], [32.7, 490.0], [32.8, 490.0], [32.9, 491.0], [33.0, 491.0], [33.1, 492.0], [33.2, 492.0], [33.3, 493.0], [33.4, 493.0], [33.5, 494.0], [33.6, 494.0], [33.7, 495.0], [33.8, 495.0], [33.9, 496.0], [34.0, 496.0], [34.1, 497.0], [34.2, 497.0], [34.3, 498.0], [34.4, 498.0], [34.5, 499.0], [34.6, 499.0], [34.7, 500.0], [34.8, 500.0], [34.9, 501.0], [35.0, 501.0], [35.1, 501.0], [35.2, 502.0], [35.3, 502.0], [35.4, 503.0], [35.5, 503.0], [35.6, 504.0], [35.7, 504.0], [35.8, 505.0], [35.9, 505.0], [36.0, 506.0], [36.1, 506.0], [36.2, 507.0], [36.3, 507.0], [36.4, 508.0], [36.5, 508.0], [36.6, 509.0], [36.7, 509.0], [36.8, 510.0], [36.9, 510.0], [37.0, 511.0], [37.1, 511.0], [37.2, 511.0], [37.3, 512.0], [37.4, 512.0], [37.5, 513.0], [37.6, 513.0], [37.7, 514.0], [37.8, 514.0], [37.9, 515.0], [38.0, 515.0], [38.1, 516.0], [38.2, 516.0], [38.3, 517.0], [38.4, 517.0], [38.5, 518.0], [38.6, 518.0], [38.7, 518.0], [38.8, 519.0], [38.9, 519.0], [39.0, 520.0], [39.1, 520.0], [39.2, 521.0], [39.3, 521.0], [39.4, 522.0], [39.5, 522.0], [39.6, 523.0], [39.7, 523.0], [39.8, 523.0], [39.9, 524.0], [40.0, 524.0], [40.1, 525.0], [40.2, 525.0], [40.3, 526.0], [40.4, 526.0], [40.5, 527.0], [40.6, 527.0], [40.7, 528.0], [40.8, 528.0], [40.9, 528.0], [41.0, 529.0], [41.1, 529.0], [41.2, 530.0], [41.3, 530.0], [41.4, 531.0], [41.5, 531.0], [41.6, 532.0], [41.7, 532.0], [41.8, 533.0], [41.9, 533.0], [42.0, 534.0], [42.1, 534.0], [42.2, 534.0], [42.3, 535.0], [42.4, 535.0], [42.5, 536.0], [42.6, 536.0], [42.7, 537.0], [42.8, 537.0], [42.9, 538.0], [43.0, 538.0], [43.1, 539.0], [43.2, 539.0], [43.3, 539.0], [43.4, 540.0], [43.5, 540.0], [43.6, 541.0], [43.7, 541.0], [43.8, 542.0], [43.9, 542.0], [44.0, 543.0], [44.1, 543.0], [44.2, 543.0], [44.3, 544.0], [44.4, 544.0], [44.5, 545.0], [44.6, 545.0], [44.7, 546.0], [44.8, 546.0], [44.9, 547.0], [45.0, 547.0], [45.1, 548.0], [45.2, 548.0], [45.3, 548.0], [45.4, 549.0], [45.5, 549.0], [45.6, 550.0], [45.7, 550.0], [45.8, 551.0], [45.9, 551.0], [46.0, 551.0], [46.1, 552.0], [46.2, 552.0], [46.3, 553.0], [46.4, 553.0], [46.5, 554.0], [46.6, 554.0], [46.7, 555.0], [46.8, 555.0], [46.9, 555.0], [47.0, 556.0], [47.1, 556.0], [47.2, 557.0], [47.3, 557.0], [47.4, 558.0], [47.5, 558.0], [47.6, 558.0], [47.7, 559.0], [47.8, 559.0], [47.9, 560.0], [48.0, 560.0], [48.1, 561.0], [48.2, 561.0], [48.3, 561.0], [48.4, 562.0], [48.5, 562.0], [48.6, 563.0], [48.7, 563.0], [48.8, 564.0], [48.9, 564.0], [49.0, 564.0], [49.1, 565.0], [49.2, 565.0], [49.3, 566.0], [49.4, 566.0], [49.5, 566.0], [49.6, 567.0], [49.7, 567.0], [49.8, 568.0], [49.9, 568.0], [50.0, 568.0], [50.1, 569.0], [50.2, 569.0], [50.3, 570.0], [50.4, 570.0], [50.5, 570.0], [50.6, 571.0], [50.7, 571.0], [50.8, 572.0], [50.9, 572.0], [51.0, 572.0], [51.1, 573.0], [51.2, 573.0], [51.3, 574.0], [51.4, 574.0], [51.5, 575.0], [51.6, 575.0], [51.7, 575.0], [51.8, 576.0], [51.9, 576.0], [52.0, 577.0], [52.1, 577.0], [52.2, 578.0], [52.3, 578.0], [52.4, 578.0], [52.5, 579.0], [52.6, 579.0], [52.7, 580.0], [52.8, 580.0], [52.9, 580.0], [53.0, 581.0], [53.1, 581.0], [53.2, 582.0], [53.3, 582.0], [53.4, 583.0], [53.5, 583.0], [53.6, 583.0], [53.7, 584.0], [53.8, 584.0], [53.9, 585.0], [54.0, 585.0], [54.1, 586.0], [54.2, 586.0], [54.3, 586.0], [54.4, 587.0], [54.5, 587.0], [54.6, 588.0], [54.7, 588.0], [54.8, 589.0], [54.9, 589.0], [55.0, 589.0], [55.1, 590.0], [55.2, 590.0], [55.3, 591.0], [55.4, 591.0], [55.5, 591.0], [55.6, 592.0], [55.7, 592.0], [55.8, 593.0], [55.9, 593.0], [56.0, 593.0], [56.1, 594.0], [56.2, 594.0], [56.3, 595.0], [56.4, 595.0], [56.5, 595.0], [56.6, 596.0], [56.7, 596.0], [56.8, 597.0], [56.9, 597.0], [57.0, 597.0], [57.1, 598.0], [57.2, 598.0], [57.3, 599.0], [57.4, 599.0], [57.5, 599.0], [57.6, 600.0], [57.7, 600.0], [57.8, 601.0], [57.9, 601.0], [58.0, 601.0], [58.1, 602.0], [58.2, 602.0], [58.3, 603.0], [58.4, 603.0], [58.5, 603.0], [58.6, 604.0], [58.7, 604.0], [58.8, 605.0], [58.9, 605.0], [59.0, 606.0], [59.1, 606.0], [59.2, 606.0], [59.3, 607.0], [59.4, 607.0], [59.5, 608.0], [59.6, 608.0], [59.7, 608.0], [59.8, 609.0], [59.9, 609.0], [60.0, 610.0], [60.1, 610.0], [60.2, 610.0], [60.3, 611.0], [60.4, 611.0], [60.5, 612.0], [60.6, 612.0], [60.7, 612.0], [60.8, 613.0], [60.9, 613.0], [61.0, 614.0], [61.1, 614.0], [61.2, 614.0], [61.3, 615.0], [61.4, 615.0], [61.5, 616.0], [61.6, 616.0], [61.7, 616.0], [61.8, 617.0], [61.9, 617.0], [62.0, 618.0], [62.1, 618.0], [62.2, 619.0], [62.3, 619.0], [62.4, 619.0], [62.5, 620.0], [62.6, 620.0], [62.7, 621.0], [62.8, 621.0], [62.9, 622.0], [63.0, 622.0], [63.1, 622.0], [63.2, 623.0], [63.3, 623.0], [63.4, 624.0], [63.5, 624.0], [63.6, 625.0], [63.7, 625.0], [63.8, 625.0], [63.9, 626.0], [64.0, 626.0], [64.1, 627.0], [64.2, 627.0], [64.3, 628.0], [64.4, 628.0], [64.5, 628.0], [64.6, 629.0], [64.7, 629.0], [64.8, 630.0], [64.9, 630.0], [65.0, 631.0], [65.1, 631.0], [65.2, 631.0], [65.3, 632.0], [65.4, 632.0], [65.5, 633.0], [65.6, 633.0], [65.7, 634.0], [65.8, 634.0], [65.9, 634.0], [66.0, 635.0], [66.1, 635.0], [66.2, 636.0], [66.3, 636.0], [66.4, 637.0], [66.5, 637.0], [66.6, 637.0], [66.7, 638.0], [66.8, 638.0], [66.9, 639.0], [67.0, 639.0], [67.1, 640.0], [67.2, 640.0], [67.3, 640.0], [67.4, 641.0], [67.5, 641.0], [67.6, 642.0], [67.7, 642.0], [67.8, 643.0], [67.9, 643.0], [68.0, 644.0], [68.1, 644.0], [68.2, 645.0], [68.3, 645.0], [68.4, 645.0], [68.5, 646.0], [68.6, 646.0], [68.7, 647.0], [68.8, 647.0], [68.9, 648.0], [69.0, 648.0], [69.1, 649.0], [69.2, 649.0], [69.3, 649.0], [69.4, 650.0], [69.5, 650.0], [69.6, 651.0], [69.7, 651.0], [69.8, 652.0], [69.9, 652.0], [70.0, 653.0], [70.1, 653.0], [70.2, 654.0], [70.3, 654.0], [70.4, 655.0], [70.5, 655.0], [70.6, 656.0], [70.7, 656.0], [70.8, 657.0], [70.9, 657.0], [71.0, 658.0], [71.1, 658.0], [71.2, 659.0], [71.3, 659.0], [71.4, 660.0], [71.5, 660.0], [71.6, 661.0], [71.7, 661.0], [71.8, 662.0], [71.9, 662.0], [72.0, 662.0], [72.1, 663.0], [72.2, 663.0], [72.3, 664.0], [72.4, 664.0], [72.5, 665.0], [72.6, 666.0], [72.7, 666.0], [72.8, 666.0], [72.9, 667.0], [73.0, 668.0], [73.1, 668.0], [73.2, 669.0], [73.3, 669.0], [73.4, 670.0], [73.5, 670.0], [73.6, 671.0], [73.7, 671.0], [73.8, 671.0], [73.9, 672.0], [74.0, 673.0], [74.1, 673.0], [74.2, 674.0], [74.3, 674.0], [74.4, 675.0], [74.5, 675.0], [74.6, 676.0], [74.7, 676.0], [74.8, 677.0], [74.9, 677.0], [75.0, 678.0], [75.1, 678.0], [75.2, 679.0], [75.3, 680.0], [75.4, 680.0], [75.5, 681.0], [75.6, 681.0], [75.7, 682.0], [75.8, 682.0], [75.9, 683.0], [76.0, 684.0], [76.1, 684.0], [76.2, 685.0], [76.3, 685.0], [76.4, 686.0], [76.5, 686.0], [76.6, 687.0], [76.7, 688.0], [76.8, 688.0], [76.9, 689.0], [77.0, 689.0], [77.1, 690.0], [77.2, 691.0], [77.3, 691.0], [77.4, 692.0], [77.5, 692.0], [77.6, 693.0], [77.7, 694.0], [77.8, 694.0], [77.9, 695.0], [78.0, 696.0], [78.1, 696.0], [78.2, 697.0], [78.3, 697.0], [78.4, 698.0], [78.5, 699.0], [78.6, 699.0], [78.7, 700.0], [78.8, 700.0], [78.9, 701.0], [79.0, 702.0], [79.1, 702.0], [79.2, 703.0], [79.3, 704.0], [79.4, 704.0], [79.5, 705.0], [79.6, 706.0], [79.7, 706.0], [79.8, 707.0], [79.9, 708.0], [80.0, 708.0], [80.1, 709.0], [80.2, 710.0], [80.3, 710.0], [80.4, 711.0], [80.5, 712.0], [80.6, 712.0], [80.7, 713.0], [80.8, 714.0], [80.9, 715.0], [81.0, 715.0], [81.1, 716.0], [81.2, 717.0], [81.3, 717.0], [81.4, 718.0], [81.5, 719.0], [81.6, 720.0], [81.7, 720.0], [81.8, 721.0], [81.9, 722.0], [82.0, 723.0], [82.1, 724.0], [82.2, 724.0], [82.3, 725.0], [82.4, 726.0], [82.5, 727.0], [82.6, 728.0], [82.7, 729.0], [82.8, 729.0], [82.9, 730.0], [83.0, 731.0], [83.1, 732.0], [83.2, 733.0], [83.3, 734.0], [83.4, 735.0], [83.5, 736.0], [83.6, 737.0], [83.7, 737.0], [83.8, 738.0], [83.9, 739.0], [84.0, 740.0], [84.1, 741.0], [84.2, 742.0], [84.3, 743.0], [84.4, 744.0], [84.5, 745.0], [84.6, 746.0], [84.7, 747.0], [84.8, 748.0], [84.9, 749.0], [85.0, 749.0], [85.1, 750.0], [85.2, 751.0], [85.3, 752.0], [85.4, 753.0], [85.5, 754.0], [85.6, 755.0], [85.7, 756.0], [85.8, 757.0], [85.9, 759.0], [86.0, 760.0], [86.1, 761.0], [86.2, 762.0], [86.3, 763.0], [86.4, 764.0], [86.5, 765.0], [86.6, 766.0], [86.7, 768.0], [86.8, 769.0], [86.9, 770.0], [87.0, 771.0], [87.1, 772.0], [87.2, 773.0], [87.3, 775.0], [87.4, 776.0], [87.5, 777.0], [87.6, 778.0], [87.7, 779.0], [87.8, 781.0], [87.9, 782.0], [88.0, 783.0], [88.1, 785.0], [88.2, 786.0], [88.3, 787.0], [88.4, 789.0], [88.5, 790.0], [88.6, 791.0], [88.7, 793.0], [88.8, 794.0], [88.9, 795.0], [89.0, 797.0], [89.1, 798.0], [89.2, 799.0], [89.3, 801.0], [89.4, 802.0], [89.5, 804.0], [89.6, 805.0], [89.7, 807.0], [89.8, 808.0], [89.9, 810.0], [90.0, 811.0], [90.1, 813.0], [90.2, 815.0], [90.3, 816.0], [90.4, 818.0], [90.5, 820.0], [90.6, 821.0], [90.7, 823.0], [90.8, 825.0], [90.9, 827.0], [91.0, 829.0], [91.1, 830.0], [91.2, 832.0], [91.3, 834.0], [91.4, 836.0], [91.5, 838.0], [91.6, 840.0], [91.7, 842.0], [91.8, 844.0], [91.9, 846.0], [92.0, 848.0], [92.1, 850.0], [92.2, 852.0], [92.3, 855.0], [92.4, 857.0], [92.5, 859.0], [92.6, 861.0], [92.7, 864.0], [92.8, 866.0], [92.9, 868.0], [93.0, 871.0], [93.1, 874.0], [93.2, 876.0], [93.3, 879.0], [93.4, 882.0], [93.5, 884.0], [93.6, 887.0], [93.7, 889.0], [93.8, 892.0], [93.9, 895.0], [94.0, 898.0], [94.1, 900.0], [94.2, 903.0], [94.3, 906.0], [94.4, 908.0], [94.5, 911.0], [94.6, 914.0], [94.7, 917.0], [94.8, 921.0], [94.9, 924.0], [95.0, 927.0], [95.1, 930.0], [95.2, 933.0], [95.3, 937.0], [95.4, 940.0], [95.5, 944.0], [95.6, 947.0], [95.7, 951.0], [95.8, 955.0], [95.9, 959.0], [96.0, 963.0], [96.1, 967.0], [96.2, 971.0], [96.3, 975.0], [96.4, 980.0], [96.5, 985.0], [96.6, 989.0], [96.7, 994.0], [96.8, 999.0], [96.9, 1004.0], [97.0, 1009.0], [97.1, 1014.0], [97.2, 1020.0], [97.3, 1025.0], [97.4, 1031.0], [97.5, 1037.0], [97.6, 1043.0], [97.7, 1050.0], [97.8, 1057.0], [97.9, 1064.0], [98.0, 1072.0], [98.1, 1080.0], [98.2, 1089.0], [98.3, 1098.0], [98.4, 1107.0], [98.5, 1117.0], [98.6, 1126.0], [98.7, 1138.0], [98.8, 1152.0], [98.9, 1167.0], [99.0, 1182.0], [99.1, 1203.0], [99.2, 1223.0], [99.3, 1248.0], [99.4, 1278.0], [99.5, 1316.0], [99.6, 1369.0], [99.7, 1454.0], [99.8, 1644.0], [99.9, 3097.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 70357.0, "series": [{"data": [[600.0, 64936.0], [700.0, 32551.0], [800.0, 14975.0], [900.0, 8467.0], [1000.0, 4600.0], [1100.0, 2361.0], [1200.0, 1168.0], [1300.0, 544.0], [1400.0, 299.0], [1500.0, 152.0], [100.0, 808.0], [1600.0, 114.0], [1700.0, 74.0], [1800.0, 58.0], [1900.0, 32.0], [2000.0, 13.0], [2100.0, 9.0], [2300.0, 8.0], [2200.0, 13.0], [2400.0, 1.0], [2500.0, 4.0], [2600.0, 3.0], [2800.0, 7.0], [2700.0, 5.0], [2900.0, 3.0], [3000.0, 10.0], [3100.0, 13.0], [3200.0, 26.0], [3300.0, 39.0], [200.0, 10943.0], [3400.0, 50.0], [3500.0, 46.0], [3600.0, 40.0], [3700.0, 38.0], [3800.0, 20.0], [3900.0, 19.0], [4000.0, 9.0], [4100.0, 3.0], [4300.0, 1.0], [4400.0, 1.0], [300.0, 37448.0], [6100.0, 2.0], [400.0, 57588.0], [500.0, 70357.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 810.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 199617.0, "series": [{"data": [[0.0, 107431.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 199617.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 810.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 297.3621517209085, "minX": 1.6202742E12, "maxY": 300.0, "series": [{"data": [[1.62027432E12, 300.0], [1.6202748E12, 297.3621517209085], [1.6202745E12, 300.0], [1.62027468E12, 300.0], [1.6202742E12, 300.0], [1.62027438E12, 300.0], [1.62027426E12, 300.0], [1.62027456E12, 300.0], [1.62027474E12, 300.0], [1.62027444E12, 300.0], [1.62027462E12, 300.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6202748E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 399.5, "minX": 1.0, "maxY": 1098.0, "series": [{"data": [[2.0, 886.0], [3.0, 627.0], [4.0, 898.0], [5.0, 703.0], [6.0, 682.0], [7.0, 467.0], [8.0, 466.0], [9.0, 566.0], [10.0, 580.0], [12.0, 425.0], [13.0, 464.5], [14.0, 495.0], [16.0, 527.0], [18.0, 757.5], [19.0, 797.0], [20.0, 419.0], [23.0, 593.0], [25.0, 635.5], [27.0, 587.0], [28.0, 637.5], [30.0, 690.0], [31.0, 567.0], [33.0, 488.0], [32.0, 638.5], [34.0, 537.5], [36.0, 719.5], [39.0, 722.0], [38.0, 562.0], [41.0, 466.0], [40.0, 549.0], [42.0, 759.0], [44.0, 520.5], [46.0, 399.5], [48.0, 802.0], [51.0, 653.0], [52.0, 622.0], [55.0, 475.0], [54.0, 659.5], [57.0, 746.0], [56.0, 491.0], [58.0, 548.0], [61.0, 503.0], [60.0, 728.0], [63.0, 636.5], [67.0, 561.5], [64.0, 521.0], [71.0, 521.0], [68.0, 701.0], [74.0, 585.3333333333334], [73.0, 541.0], [79.0, 584.0], [77.0, 567.0], [83.0, 508.0], [82.0, 517.0], [81.0, 686.0], [80.0, 508.5], [86.0, 738.0], [85.0, 580.0], [84.0, 519.0], [89.0, 834.5], [88.0, 689.0], [95.0, 520.0], [94.0, 714.5], [92.0, 690.6666666666666], [99.0, 540.0], [98.0, 717.0], [97.0, 549.0], [96.0, 549.0], [103.0, 485.0], [102.0, 557.0], [101.0, 612.0], [106.0, 649.0], [105.0, 561.0], [104.0, 486.0], [111.0, 678.0], [110.0, 559.0], [108.0, 542.0], [115.0, 725.0], [114.0, 635.0], [112.0, 571.0], [119.0, 780.0], [117.0, 592.5], [116.0, 633.0], [123.0, 907.0], [122.0, 692.0], [121.0, 755.5], [126.0, 687.0], [125.0, 531.0], [124.0, 523.0], [135.0, 602.0], [133.0, 555.0], [132.0, 588.0], [129.0, 812.0], [128.0, 966.0], [143.0, 689.0], [141.0, 811.0], [140.0, 813.0], [139.0, 825.0], [138.0, 600.0], [136.0, 569.3333333333334], [151.0, 682.0], [150.0, 1098.0], [149.0, 551.0], [148.0, 702.0], [147.0, 655.0], [145.0, 586.0], [144.0, 686.0], [158.0, 647.5], [156.0, 685.0], [154.0, 613.0], [167.0, 781.5], [165.0, 627.5], [163.0, 594.0], [162.0, 650.0], [161.0, 684.0], [175.0, 754.0], [173.0, 587.0], [172.0, 587.0], [171.0, 661.0], [168.0, 660.0], [183.0, 597.0], [181.0, 595.0], [180.0, 599.0], [179.0, 660.0], [178.0, 726.5], [176.0, 787.0], [191.0, 659.0], [189.0, 538.0], [188.0, 538.0], [187.0, 636.0], [186.0, 930.0], [185.0, 766.0], [184.0, 596.5], [199.0, 641.0], [198.0, 842.0], [197.0, 581.0], [196.0, 597.0], [195.0, 601.0], [194.0, 600.0], [193.0, 658.0], [207.0, 575.0], [204.0, 621.0], [202.0, 659.0], [201.0, 614.0], [215.0, 556.0], [213.0, 764.0], [212.0, 869.0], [210.0, 739.5], [208.0, 556.0], [223.0, 601.5], [222.0, 560.0], [220.0, 556.5], [218.0, 692.5], [216.0, 743.3333333333334], [231.0, 1093.0], [230.0, 654.0], [229.0, 624.0], [228.0, 569.0], [227.0, 557.0], [226.0, 570.0], [239.0, 696.0], [238.0, 531.0], [237.0, 549.0], [236.0, 678.0], [234.0, 638.0], [233.0, 626.5], [246.0, 554.0], [245.0, 697.0], [242.0, 530.0], [240.0, 682.0], [255.0, 702.0], [252.0, 726.75], [249.0, 668.5], [271.0, 671.0], [269.0, 669.75], [268.0, 739.0], [262.0, 816.0], [261.0, 668.5], [259.0, 550.0], [258.0, 612.75], [256.0, 644.6666666666666], [286.0, 698.0], [287.0, 644.0], [285.0, 810.5], [284.0, 709.3333333333334], [282.0, 624.0], [280.0, 573.0], [279.0, 700.8], [277.0, 737.0], [276.0, 734.0], [296.0, 575.0], [300.0, 584.5083329268499], [299.0, 746.3333333333334], [298.0, 643.6666666666666], [297.0, 679.4444444444445], [295.0, 697.5], [293.0, 721.0], [292.0, 674.5], [291.0, 626.6666666666666], [290.0, 762.0], [289.0, 701.0], [288.0, 809.5], [1.0, 907.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[299.85361432868456, 584.5830545251388]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 32737.6, "minX": 1.6202742E12, "maxY": 172263.53333333333, "series": [{"data": [[1.62027432E12, 171884.5], [1.6202748E12, 86434.71666666666], [1.6202745E12, 146592.81666666668], [1.62027468E12, 158634.2], [1.6202742E12, 62988.8], [1.62027438E12, 148936.6], [1.62027426E12, 172263.53333333333], [1.62027456E12, 149728.18333333332], [1.62027474E12, 156196.91666666666], [1.62027444E12, 149191.61666666667], [1.62027462E12, 156005.46666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62027432E12, 89409.56666666667], [1.6202748E12, 44987.86666666667], [1.6202745E12, 76216.56666666667], [1.62027468E12, 82523.4], [1.6202742E12, 32737.6], [1.62027438E12, 77483.2], [1.62027426E12, 89607.06666666667], [1.62027456E12, 77825.53333333334], [1.62027474E12, 81248.86666666667], [1.62027444E12, 77541.13333333333], [1.62027462E12, 81111.93333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6202748E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 529.4417832373397, "minX": 1.6202742E12, "maxY": 621.1000932868092, "series": [{"data": [[1.62027432E12, 530.3389391217282], [1.6202748E12, 616.2004214469694], [1.6202745E12, 621.1000932868092], [1.62027468E12, 573.9788116663495], [1.6202742E12, 599.6303088803082], [1.62027438E12, 610.3983482871139], [1.62027426E12, 529.4417832373397], [1.62027456E12, 608.9582459227169], [1.62027474E12, 582.7657353989819], [1.62027444E12, 612.6246009644763], [1.62027462E12, 585.1242127134636]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6202748E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 529.412601387096, "minX": 1.6202742E12, "maxY": 621.071416231903, "series": [{"data": [[1.62027432E12, 530.306129060766], [1.6202748E12, 616.1717396394291], [1.6202745E12, 621.071416231903], [1.62027468E12, 573.9543365881705], [1.6202742E12, 599.2833815958876], [1.62027438E12, 610.3687126155484], [1.62027426E12, 529.412601387096], [1.62027456E12, 608.9295188468534], [1.62027474E12, 582.7396123679233], [1.62027444E12, 612.597126944234], [1.62027462E12, 585.1000259723407]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6202748E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.01688202064800966, "minX": 1.6202742E12, "maxY": 0.3009974259974256, "series": [{"data": [[1.62027432E12, 0.037051217859982846], [1.6202748E12, 0.04624209786935142], [1.6202745E12, 0.01744808762049559], [1.62027468E12, 0.027666092284127804], [1.6202742E12, 0.3009974259974256], [1.62027438E12, 0.026407014681892004], [1.62027426E12, 0.023274950041142488], [1.62027456E12, 0.03177234892061999], [1.62027474E12, 0.023400531535619457], [1.62027444E12, 0.023059159138762348], [1.62027462E12, 0.01688202064800966]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6202748E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 115.0, "minX": 1.6202742E12, "maxY": 6156.0, "series": [{"data": [[1.62027432E12, 6121.0], [1.6202748E12, 3533.0], [1.6202745E12, 6156.0], [1.62027468E12, 2897.0], [1.6202742E12, 4371.0], [1.62027438E12, 2538.0], [1.62027426E12, 2978.0], [1.62027456E12, 3717.0], [1.62027474E12, 3890.0], [1.62027444E12, 4488.0], [1.62027462E12, 2926.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62027432E12, 743.0], [1.6202748E12, 852.0], [1.6202745E12, 821.9000000000015], [1.62027468E12, 789.0], [1.6202742E12, 760.0], [1.62027438E12, 853.0], [1.62027426E12, 788.0], [1.62027456E12, 785.0], [1.62027474E12, 782.9000000000015], [1.62027444E12, 801.0], [1.62027462E12, 720.9000000000015]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62027432E12, 1074.0], [1.6202748E12, 1252.1500000000015], [1.6202745E12, 1189.9900000000016], [1.62027468E12, 1199.9900000000016], [1.6202742E12, 3613.0], [1.62027438E12, 1198.9800000000032], [1.62027426E12, 1120.9900000000016], [1.62027456E12, 1091.9900000000016], [1.62027474E12, 1112.9900000000016], [1.62027444E12, 1123.9900000000016], [1.62027462E12, 1018.950000000008]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62027432E12, 848.0], [1.6202748E12, 973.0], [1.6202745E12, 940.9500000000007], [1.62027468E12, 910.9500000000007], [1.6202742E12, 902.3499999999985], [1.62027438E12, 956.9500000000007], [1.62027426E12, 889.9500000000007], [1.62027456E12, 886.0], [1.62027474E12, 885.0], [1.62027444E12, 910.0], [1.62027462E12, 818.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62027432E12, 142.0], [1.6202748E12, 149.0], [1.6202745E12, 167.0], [1.62027468E12, 135.0], [1.6202742E12, 115.0], [1.62027438E12, 158.0], [1.62027426E12, 121.0], [1.62027456E12, 152.0], [1.62027474E12, 136.0], [1.62027444E12, 153.0], [1.62027462E12, 159.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62027432E12, 506.0], [1.6202748E12, 601.0], [1.6202745E12, 577.0], [1.62027468E12, 555.0], [1.6202742E12, 518.0], [1.62027438E12, 610.0], [1.62027426E12, 560.0], [1.62027456E12, 550.0], [1.62027474E12, 551.0], [1.62027444E12, 566.0], [1.62027462E12, 505.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6202748E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 349.0, "minX": 2.0, "maxY": 3317.5, "series": [{"data": [[2.0, 896.5], [46.0, 3317.5], [345.0, 740.0], [346.0, 761.0], [362.0, 716.5], [354.0, 732.0], [361.0, 740.0], [358.0, 760.0], [365.0, 737.0], [383.0, 696.5], [380.0, 703.0], [373.0, 799.0], [377.0, 713.0], [378.0, 697.5], [381.0, 720.0], [382.0, 691.0], [376.0, 738.0], [372.0, 723.0], [375.0, 725.5], [370.0, 747.5], [368.0, 712.0], [397.0, 701.5], [393.0, 709.0], [389.0, 680.0], [388.0, 700.5], [390.0, 677.5], [395.0, 705.0], [398.0, 690.0], [394.0, 676.5], [386.0, 714.0], [396.0, 697.0], [387.0, 690.0], [385.0, 665.0], [391.0, 699.0], [392.0, 705.0], [399.0, 713.0], [413.0, 669.5], [400.0, 695.0], [404.0, 700.5], [403.0, 678.5], [412.0, 637.5], [401.0, 688.5], [402.0, 639.0], [410.0, 667.0], [411.0, 666.0], [409.0, 667.5], [408.0, 679.0], [405.0, 628.0], [406.0, 710.5], [407.0, 692.0], [415.0, 657.0], [414.0, 656.0], [417.0, 643.0], [419.0, 664.0], [428.0, 652.5], [430.0, 656.0], [429.0, 634.0], [424.0, 676.0], [431.0, 640.0], [425.0, 641.0], [426.0, 637.0], [427.0, 631.0], [422.0, 659.0], [423.0, 609.0], [416.0, 661.0], [420.0, 652.0], [421.0, 643.0], [445.0, 611.0], [440.0, 627.0], [435.0, 659.0], [444.0, 611.5], [434.0, 641.0], [433.0, 639.0], [438.0, 652.0], [439.0, 640.0], [432.0, 645.0], [442.0, 624.5], [443.0, 618.0], [437.0, 681.0], [436.0, 631.0], [441.0, 611.0], [446.0, 626.0], [447.0, 630.0], [451.0, 665.5], [453.0, 627.0], [452.0, 616.0], [457.0, 608.0], [458.0, 654.0], [454.0, 601.0], [450.0, 625.5], [449.0, 645.0], [460.0, 608.0], [461.0, 604.0], [462.0, 613.0], [463.0, 573.0], [455.0, 613.0], [448.0, 661.5], [456.0, 588.0], [464.0, 658.5], [469.0, 594.0], [475.0, 618.0], [468.0, 620.0], [471.0, 632.0], [476.0, 641.0], [474.0, 627.0], [465.0, 584.0], [466.0, 653.5], [478.0, 632.0], [483.0, 552.0], [484.0, 561.5], [485.0, 611.0], [489.0, 615.0], [490.0, 627.0], [491.0, 648.0], [492.0, 593.0], [493.0, 569.0], [486.0, 570.0], [480.0, 626.0], [494.0, 580.0], [488.0, 587.0], [495.0, 574.0], [481.0, 619.0], [509.0, 565.0], [507.0, 528.0], [506.0, 582.0], [500.0, 618.0], [505.0, 546.0], [510.0, 536.0], [497.0, 581.0], [501.0, 585.0], [508.0, 528.0], [498.0, 564.5], [496.0, 572.0], [502.0, 557.0], [503.0, 641.0], [514.0, 544.0], [523.0, 529.0], [524.0, 557.0], [520.0, 557.0], [522.0, 516.0], [521.0, 545.0], [525.0, 518.0], [538.0, 550.5], [531.0, 521.0], [533.0, 534.0], [535.0, 541.0], [529.0, 543.0], [526.0, 605.0], [513.0, 553.0], [512.0, 630.0], [527.0, 526.0], [516.0, 518.5], [518.0, 540.0], [517.0, 603.0], [515.0, 534.0], [519.0, 630.0], [536.0, 561.0], [537.0, 504.0], [539.0, 626.0], [540.0, 499.0], [541.0, 560.0], [543.0, 513.5], [574.0, 549.5], [565.0, 480.0], [563.0, 534.0], [564.0, 521.0], [549.0, 513.0], [575.0, 525.0], [560.0, 519.5], [561.0, 544.0], [570.0, 518.5], [555.0, 513.0], [559.0, 487.0], [544.0, 513.0], [557.0, 595.0], [558.0, 519.5], [548.0, 531.5], [547.0, 516.0], [546.0, 475.0], [545.0, 524.0], [552.0, 492.0], [554.0, 511.5], [553.0, 557.0], [573.0, 531.0], [569.0, 523.0], [551.0, 536.0], [550.0, 497.0], [568.0, 526.5], [562.0, 531.5], [601.0, 495.0], [592.0, 468.5], [593.0, 487.0], [603.0, 512.0], [606.0, 471.5], [604.0, 471.5], [602.0, 496.0], [594.0, 477.0], [595.0, 550.0], [597.0, 463.0], [598.0, 480.0], [577.0, 476.0], [576.0, 558.5], [588.0, 525.0], [590.0, 551.5], [589.0, 496.0], [584.0, 494.0], [587.0, 530.0], [579.0, 549.0], [582.0, 505.0], [581.0, 510.0], [600.0, 518.0], [583.0, 493.5], [615.0, 470.0], [633.0, 412.0], [632.0, 469.0], [639.0, 439.0], [630.0, 447.0], [631.0, 450.0], [628.0, 445.0], [627.0, 462.0], [626.0, 448.0], [625.0, 511.0], [624.0, 446.5], [613.0, 465.5], [614.0, 463.0], [610.0, 503.5], [609.0, 473.0], [612.0, 513.0], [608.0, 444.0], [617.0, 450.0], [618.0, 473.0], [619.0, 495.0], [620.0, 432.5], [622.0, 507.0], [621.0, 427.0], [636.0, 412.0], [637.0, 439.0], [634.0, 483.5], [647.0, 450.5], [650.0, 434.0], [652.0, 409.0], [654.0, 451.0], [653.0, 450.0], [657.0, 517.0], [658.0, 461.5], [659.0, 445.0], [660.0, 406.0], [664.0, 451.0], [666.0, 413.0], [667.0, 434.0], [665.0, 429.0], [668.0, 410.0], [646.0, 446.0], [645.0, 441.0], [655.0, 465.0], [644.0, 461.5], [642.0, 521.0], [641.0, 468.0], [643.0, 484.0], [662.0, 432.5], [663.0, 431.0], [661.0, 436.0], [676.0, 432.0], [685.0, 408.5], [694.0, 423.5], [673.0, 482.0], [674.0, 423.0], [672.0, 420.5], [687.0, 408.0], [686.0, 431.5], [683.0, 410.0], [681.0, 410.0], [682.0, 424.5], [678.0, 429.0], [677.0, 407.0], [703.0, 407.0], [702.0, 386.5], [697.0, 393.0], [701.0, 414.0], [693.0, 434.0], [706.0, 385.0], [708.0, 407.0], [729.0, 419.0], [718.0, 391.0], [716.0, 410.0], [713.0, 443.0], [705.0, 430.0], [704.0, 385.0], [719.0, 381.0], [730.0, 452.0], [722.0, 412.0], [726.0, 388.5], [725.0, 422.0], [738.0, 389.0], [759.0, 349.0], [747.0, 411.0], [798.0, 354.0], [802.0, 379.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 802.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 349.0, "minX": 2.0, "maxY": 3260.5, "series": [{"data": [[2.0, 896.5], [46.0, 3260.5], [345.0, 740.0], [346.0, 761.0], [362.0, 716.5], [354.0, 732.0], [361.0, 740.0], [358.0, 760.0], [365.0, 736.0], [383.0, 696.5], [380.0, 703.0], [373.0, 799.0], [377.0, 713.0], [378.0, 697.0], [381.0, 720.0], [382.0, 691.0], [376.0, 738.0], [372.0, 723.0], [375.0, 725.5], [370.0, 747.5], [368.0, 712.0], [397.0, 701.5], [393.0, 709.0], [389.0, 680.0], [388.0, 700.5], [390.0, 677.0], [395.0, 705.0], [398.0, 689.5], [394.0, 676.5], [386.0, 714.0], [396.0, 697.0], [387.0, 690.0], [385.0, 665.0], [391.0, 699.0], [392.0, 705.0], [399.0, 713.0], [413.0, 669.5], [400.0, 695.0], [404.0, 700.5], [403.0, 678.5], [412.0, 637.5], [401.0, 688.5], [402.0, 639.0], [410.0, 667.0], [411.0, 665.5], [409.0, 667.5], [408.0, 679.0], [405.0, 628.0], [406.0, 710.5], [407.0, 692.0], [415.0, 657.0], [414.0, 656.0], [417.0, 643.0], [419.0, 664.0], [428.0, 652.5], [430.0, 656.0], [429.0, 634.0], [424.0, 676.0], [431.0, 640.0], [425.0, 641.0], [426.0, 637.0], [427.0, 631.0], [422.0, 659.0], [423.0, 609.0], [416.0, 661.0], [420.0, 652.0], [421.0, 643.0], [445.0, 611.0], [440.0, 627.0], [435.0, 659.0], [444.0, 611.5], [434.0, 641.0], [433.0, 639.0], [438.0, 652.0], [439.0, 640.0], [432.0, 645.0], [442.0, 624.5], [443.0, 618.0], [437.0, 681.0], [436.0, 631.0], [441.0, 611.0], [446.0, 626.0], [447.0, 630.0], [451.0, 665.5], [453.0, 627.0], [452.0, 616.0], [457.0, 608.0], [458.0, 654.0], [454.0, 601.0], [450.0, 625.5], [449.0, 645.0], [460.0, 608.0], [461.0, 604.0], [462.0, 613.0], [463.0, 573.0], [455.0, 613.0], [448.0, 661.5], [456.0, 588.0], [464.0, 658.0], [469.0, 594.0], [475.0, 618.0], [468.0, 620.0], [471.0, 632.0], [476.0, 641.0], [474.0, 627.0], [465.0, 584.0], [466.0, 653.5], [478.0, 632.0], [483.0, 552.0], [484.0, 561.0], [485.0, 611.0], [489.0, 615.0], [490.0, 627.0], [491.0, 648.0], [492.0, 592.5], [493.0, 569.0], [486.0, 570.0], [480.0, 626.0], [494.0, 580.0], [488.0, 587.0], [495.0, 574.0], [481.0, 619.0], [509.0, 565.0], [507.0, 528.0], [506.0, 582.0], [500.0, 618.0], [505.0, 546.0], [510.0, 536.0], [497.0, 581.0], [501.0, 585.0], [508.0, 528.0], [498.0, 564.0], [496.0, 572.0], [502.0, 557.0], [503.0, 641.0], [514.0, 544.0], [523.0, 529.0], [524.0, 557.0], [520.0, 557.0], [522.0, 516.0], [521.0, 545.0], [525.0, 518.0], [538.0, 550.5], [531.0, 521.0], [533.0, 534.0], [535.0, 541.0], [529.0, 543.0], [526.0, 605.0], [513.0, 553.0], [512.0, 630.0], [527.0, 526.0], [516.0, 518.5], [518.0, 539.5], [517.0, 603.0], [515.0, 534.0], [519.0, 630.0], [536.0, 561.0], [537.0, 504.0], [539.0, 626.0], [540.0, 499.0], [541.0, 560.0], [543.0, 513.5], [574.0, 549.5], [565.0, 480.0], [563.0, 534.0], [564.0, 521.0], [549.0, 513.0], [575.0, 525.0], [560.0, 519.5], [561.0, 544.0], [570.0, 518.5], [555.0, 513.0], [559.0, 487.0], [544.0, 513.0], [557.0, 595.0], [558.0, 519.5], [548.0, 531.5], [547.0, 516.0], [546.0, 475.0], [545.0, 524.0], [552.0, 492.0], [554.0, 511.5], [553.0, 557.0], [573.0, 531.0], [569.0, 523.0], [551.0, 536.0], [550.0, 497.0], [568.0, 526.5], [562.0, 531.5], [601.0, 495.0], [592.0, 468.5], [593.0, 487.0], [603.0, 512.0], [606.0, 471.5], [604.0, 471.5], [602.0, 496.0], [594.0, 477.0], [595.0, 550.0], [597.0, 463.0], [598.0, 480.0], [577.0, 476.0], [576.0, 558.5], [588.0, 525.0], [590.0, 551.5], [589.0, 496.0], [584.0, 494.0], [587.0, 530.0], [579.0, 548.0], [582.0, 505.0], [581.0, 510.0], [600.0, 518.0], [583.0, 493.5], [615.0, 470.0], [633.0, 412.0], [632.0, 469.0], [639.0, 439.0], [630.0, 447.0], [631.0, 450.0], [628.0, 445.0], [627.0, 462.0], [626.0, 448.0], [625.0, 511.0], [624.0, 446.5], [613.0, 465.5], [614.0, 463.0], [610.0, 503.5], [609.0, 473.0], [612.0, 513.0], [608.0, 444.0], [617.0, 450.0], [618.0, 473.0], [619.0, 495.0], [620.0, 432.5], [622.0, 507.0], [621.0, 427.0], [636.0, 412.0], [637.0, 439.0], [634.0, 483.5], [647.0, 450.5], [650.0, 434.0], [652.0, 409.0], [654.0, 451.0], [653.0, 450.0], [657.0, 516.0], [658.0, 461.5], [659.0, 445.0], [660.0, 406.0], [664.0, 451.0], [666.0, 413.0], [667.0, 434.0], [665.0, 429.0], [668.0, 410.0], [646.0, 446.0], [645.0, 441.0], [655.0, 465.0], [644.0, 461.5], [642.0, 521.0], [641.0, 468.0], [643.0, 484.0], [662.0, 432.5], [663.0, 431.0], [661.0, 436.0], [676.0, 432.0], [685.0, 408.5], [694.0, 423.0], [673.0, 482.0], [674.0, 423.0], [672.0, 420.5], [687.0, 408.0], [686.0, 431.5], [683.0, 410.0], [681.0, 410.0], [682.0, 424.0], [678.0, 429.0], [677.0, 407.0], [703.0, 407.0], [702.0, 386.5], [697.0, 393.0], [701.0, 414.0], [693.0, 434.0], [706.0, 385.0], [708.0, 407.0], [729.0, 419.0], [718.0, 390.5], [716.0, 410.0], [713.0, 443.0], [705.0, 430.0], [704.0, 385.0], [719.0, 381.0], [730.0, 452.0], [722.0, 412.0], [726.0, 388.5], [725.0, 422.0], [738.0, 389.0], [759.0, 349.0], [747.0, 411.0], [798.0, 354.0], [802.0, 379.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 802.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 212.2, "minX": 1.6202742E12, "maxY": 567.1333333333333, "series": [{"data": [[1.62027432E12, 565.8333333333334], [1.6202748E12, 279.73333333333335], [1.6202745E12, 482.3833333333333], [1.62027468E12, 522.3], [1.6202742E12, 212.2], [1.62027438E12, 490.43333333333334], [1.62027426E12, 567.1333333333333], [1.62027456E12, 492.56666666666666], [1.62027474E12, 514.2333333333333], [1.62027444E12, 490.78333333333336], [1.62027462E12, 513.3666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6202748E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 207.2, "minX": 1.6202742E12, "maxY": 567.1333333333333, "series": [{"data": [[1.62027432E12, 565.8833333333333], [1.6202748E12, 284.73333333333335], [1.6202745E12, 482.3833333333333], [1.62027468E12, 522.3], [1.6202742E12, 207.2], [1.62027438E12, 490.4], [1.62027426E12, 567.1333333333333], [1.62027456E12, 492.56666666666666], [1.62027474E12, 514.2333333333333], [1.62027444E12, 490.76666666666665], [1.62027462E12, 513.3666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6202748E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 207.2, "minX": 1.6202742E12, "maxY": 567.1333333333333, "series": [{"data": [[1.62027432E12, 565.8833333333333], [1.6202748E12, 284.73333333333335], [1.6202745E12, 482.3833333333333], [1.62027468E12, 522.3], [1.6202742E12, 207.2], [1.62027438E12, 490.4], [1.62027426E12, 567.1333333333333], [1.62027456E12, 492.56666666666666], [1.62027474E12, 514.2333333333333], [1.62027444E12, 490.76666666666665], [1.62027462E12, 513.3666666666667]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6202748E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 207.2, "minX": 1.6202742E12, "maxY": 567.1333333333333, "series": [{"data": [[1.62027432E12, 565.8833333333333], [1.6202748E12, 284.73333333333335], [1.6202745E12, 482.3833333333333], [1.62027468E12, 522.3], [1.6202742E12, 207.2], [1.62027438E12, 490.4], [1.62027426E12, 567.1333333333333], [1.62027456E12, 492.56666666666666], [1.62027474E12, 514.2333333333333], [1.62027444E12, 490.76666666666665], [1.62027462E12, 513.3666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6202748E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

