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
        data: {"result": {"minY": 90.0, "minX": 0.0, "maxY": 1126.0, "series": [{"data": [[0.0, 90.0], [0.1, 754.0], [0.2, 759.0], [0.3, 759.0], [0.4, 760.0], [0.5, 760.0], [0.6, 761.0], [0.7, 761.0], [0.8, 761.0], [0.9, 761.0], [1.0, 762.0], [1.1, 762.0], [1.2, 762.0], [1.3, 762.0], [1.4, 762.0], [1.5, 763.0], [1.6, 763.0], [1.7, 763.0], [1.8, 763.0], [1.9, 763.0], [2.0, 763.0], [2.1, 764.0], [2.2, 764.0], [2.3, 764.0], [2.4, 764.0], [2.5, 764.0], [2.6, 764.0], [2.7, 764.0], [2.8, 765.0], [2.9, 765.0], [3.0, 765.0], [3.1, 765.0], [3.2, 765.0], [3.3, 765.0], [3.4, 765.0], [3.5, 766.0], [3.6, 766.0], [3.7, 766.0], [3.8, 766.0], [3.9, 766.0], [4.0, 766.0], [4.1, 766.0], [4.2, 766.0], [4.3, 766.0], [4.4, 767.0], [4.5, 767.0], [4.6, 767.0], [4.7, 767.0], [4.8, 767.0], [4.9, 767.0], [5.0, 767.0], [5.1, 768.0], [5.2, 768.0], [5.3, 768.0], [5.4, 768.0], [5.5, 768.0], [5.6, 768.0], [5.7, 768.0], [5.8, 768.0], [5.9, 769.0], [6.0, 769.0], [6.1, 769.0], [6.2, 769.0], [6.3, 769.0], [6.4, 769.0], [6.5, 769.0], [6.6, 769.0], [6.7, 770.0], [6.8, 770.0], [6.9, 770.0], [7.0, 770.0], [7.1, 770.0], [7.2, 770.0], [7.3, 770.0], [7.4, 770.0], [7.5, 770.0], [7.6, 771.0], [7.7, 771.0], [7.8, 771.0], [7.9, 771.0], [8.0, 771.0], [8.1, 771.0], [8.2, 771.0], [8.3, 771.0], [8.4, 771.0], [8.5, 771.0], [8.6, 772.0], [8.7, 772.0], [8.8, 772.0], [8.9, 772.0], [9.0, 772.0], [9.1, 772.0], [9.2, 772.0], [9.3, 772.0], [9.4, 772.0], [9.5, 772.0], [9.6, 773.0], [9.7, 773.0], [9.8, 773.0], [9.9, 773.0], [10.0, 773.0], [10.1, 773.0], [10.2, 773.0], [10.3, 773.0], [10.4, 773.0], [10.5, 774.0], [10.6, 774.0], [10.7, 774.0], [10.8, 774.0], [10.9, 774.0], [11.0, 774.0], [11.1, 774.0], [11.2, 774.0], [11.3, 774.0], [11.4, 774.0], [11.5, 774.0], [11.6, 775.0], [11.7, 775.0], [11.8, 775.0], [11.9, 775.0], [12.0, 775.0], [12.1, 775.0], [12.2, 775.0], [12.3, 775.0], [12.4, 775.0], [12.5, 775.0], [12.6, 775.0], [12.7, 775.0], [12.8, 776.0], [12.9, 776.0], [13.0, 776.0], [13.1, 776.0], [13.2, 776.0], [13.3, 776.0], [13.4, 776.0], [13.5, 776.0], [13.6, 776.0], [13.7, 776.0], [13.8, 776.0], [13.9, 776.0], [14.0, 776.0], [14.1, 776.0], [14.2, 777.0], [14.3, 777.0], [14.4, 777.0], [14.5, 777.0], [14.6, 777.0], [14.7, 777.0], [14.8, 777.0], [14.9, 777.0], [15.0, 777.0], [15.1, 777.0], [15.2, 777.0], [15.3, 777.0], [15.4, 777.0], [15.5, 778.0], [15.6, 778.0], [15.7, 778.0], [15.8, 778.0], [15.9, 778.0], [16.0, 778.0], [16.1, 778.0], [16.2, 778.0], [16.3, 778.0], [16.4, 778.0], [16.5, 778.0], [16.6, 778.0], [16.7, 778.0], [16.8, 779.0], [16.9, 779.0], [17.0, 779.0], [17.1, 779.0], [17.2, 779.0], [17.3, 779.0], [17.4, 779.0], [17.5, 779.0], [17.6, 779.0], [17.7, 779.0], [17.8, 779.0], [17.9, 779.0], [18.0, 780.0], [18.1, 780.0], [18.2, 780.0], [18.3, 780.0], [18.4, 780.0], [18.5, 780.0], [18.6, 780.0], [18.7, 780.0], [18.8, 780.0], [18.9, 780.0], [19.0, 780.0], [19.1, 780.0], [19.2, 780.0], [19.3, 780.0], [19.4, 781.0], [19.5, 781.0], [19.6, 781.0], [19.7, 781.0], [19.8, 781.0], [19.9, 781.0], [20.0, 781.0], [20.1, 781.0], [20.2, 781.0], [20.3, 781.0], [20.4, 781.0], [20.5, 781.0], [20.6, 782.0], [20.7, 782.0], [20.8, 782.0], [20.9, 782.0], [21.0, 782.0], [21.1, 782.0], [21.2, 782.0], [21.3, 782.0], [21.4, 782.0], [21.5, 782.0], [21.6, 782.0], [21.7, 782.0], [21.8, 782.0], [21.9, 782.0], [22.0, 783.0], [22.1, 783.0], [22.2, 783.0], [22.3, 783.0], [22.4, 783.0], [22.5, 783.0], [22.6, 783.0], [22.7, 783.0], [22.8, 783.0], [22.9, 783.0], [23.0, 783.0], [23.1, 783.0], [23.2, 783.0], [23.3, 783.0], [23.4, 783.0], [23.5, 783.0], [23.6, 784.0], [23.7, 784.0], [23.8, 784.0], [23.9, 784.0], [24.0, 784.0], [24.1, 784.0], [24.2, 784.0], [24.3, 784.0], [24.4, 784.0], [24.5, 784.0], [24.6, 784.0], [24.7, 784.0], [24.8, 784.0], [24.9, 784.0], [25.0, 784.0], [25.1, 784.0], [25.2, 785.0], [25.3, 785.0], [25.4, 785.0], [25.5, 785.0], [25.6, 785.0], [25.7, 785.0], [25.8, 785.0], [25.9, 785.0], [26.0, 785.0], [26.1, 785.0], [26.2, 785.0], [26.3, 785.0], [26.4, 785.0], [26.5, 785.0], [26.6, 785.0], [26.7, 785.0], [26.8, 785.0], [26.9, 786.0], [27.0, 786.0], [27.1, 786.0], [27.2, 786.0], [27.3, 786.0], [27.4, 786.0], [27.5, 786.0], [27.6, 786.0], [27.7, 786.0], [27.8, 786.0], [27.9, 786.0], [28.0, 786.0], [28.1, 786.0], [28.2, 786.0], [28.3, 786.0], [28.4, 786.0], [28.5, 787.0], [28.6, 787.0], [28.7, 787.0], [28.8, 787.0], [28.9, 787.0], [29.0, 787.0], [29.1, 787.0], [29.2, 787.0], [29.3, 787.0], [29.4, 787.0], [29.5, 787.0], [29.6, 787.0], [29.7, 787.0], [29.8, 787.0], [29.9, 787.0], [30.0, 788.0], [30.1, 788.0], [30.2, 788.0], [30.3, 788.0], [30.4, 788.0], [30.5, 788.0], [30.6, 788.0], [30.7, 788.0], [30.8, 788.0], [30.9, 788.0], [31.0, 788.0], [31.1, 788.0], [31.2, 788.0], [31.3, 788.0], [31.4, 788.0], [31.5, 788.0], [31.6, 789.0], [31.7, 789.0], [31.8, 789.0], [31.9, 789.0], [32.0, 789.0], [32.1, 789.0], [32.2, 789.0], [32.3, 789.0], [32.4, 789.0], [32.5, 789.0], [32.6, 789.0], [32.7, 789.0], [32.8, 789.0], [32.9, 789.0], [33.0, 790.0], [33.1, 790.0], [33.2, 790.0], [33.3, 790.0], [33.4, 790.0], [33.5, 790.0], [33.6, 790.0], [33.7, 790.0], [33.8, 790.0], [33.9, 790.0], [34.0, 790.0], [34.1, 790.0], [34.2, 790.0], [34.3, 791.0], [34.4, 791.0], [34.5, 791.0], [34.6, 791.0], [34.7, 791.0], [34.8, 791.0], [34.9, 791.0], [35.0, 791.0], [35.1, 791.0], [35.2, 791.0], [35.3, 791.0], [35.4, 791.0], [35.5, 791.0], [35.6, 792.0], [35.7, 792.0], [35.8, 792.0], [35.9, 792.0], [36.0, 792.0], [36.1, 792.0], [36.2, 792.0], [36.3, 792.0], [36.4, 792.0], [36.5, 792.0], [36.6, 792.0], [36.7, 792.0], [36.8, 792.0], [36.9, 792.0], [37.0, 793.0], [37.1, 793.0], [37.2, 793.0], [37.3, 793.0], [37.4, 793.0], [37.5, 793.0], [37.6, 793.0], [37.7, 793.0], [37.8, 793.0], [37.9, 793.0], [38.0, 793.0], [38.1, 793.0], [38.2, 793.0], [38.3, 794.0], [38.4, 794.0], [38.5, 794.0], [38.6, 794.0], [38.7, 794.0], [38.8, 794.0], [38.9, 794.0], [39.0, 794.0], [39.1, 794.0], [39.2, 794.0], [39.3, 794.0], [39.4, 794.0], [39.5, 794.0], [39.6, 795.0], [39.7, 795.0], [39.8, 795.0], [39.9, 795.0], [40.0, 795.0], [40.1, 795.0], [40.2, 795.0], [40.3, 795.0], [40.4, 795.0], [40.5, 795.0], [40.6, 795.0], [40.7, 795.0], [40.8, 795.0], [40.9, 796.0], [41.0, 796.0], [41.1, 796.0], [41.2, 796.0], [41.3, 796.0], [41.4, 796.0], [41.5, 796.0], [41.6, 796.0], [41.7, 796.0], [41.8, 796.0], [41.9, 796.0], [42.0, 796.0], [42.1, 796.0], [42.2, 797.0], [42.3, 797.0], [42.4, 797.0], [42.5, 797.0], [42.6, 797.0], [42.7, 797.0], [42.8, 797.0], [42.9, 797.0], [43.0, 797.0], [43.1, 797.0], [43.2, 797.0], [43.3, 797.0], [43.4, 798.0], [43.5, 798.0], [43.6, 798.0], [43.7, 798.0], [43.8, 798.0], [43.9, 798.0], [44.0, 798.0], [44.1, 798.0], [44.2, 798.0], [44.3, 798.0], [44.4, 798.0], [44.5, 799.0], [44.6, 799.0], [44.7, 799.0], [44.8, 799.0], [44.9, 799.0], [45.0, 799.0], [45.1, 799.0], [45.2, 799.0], [45.3, 799.0], [45.4, 799.0], [45.5, 799.0], [45.6, 799.0], [45.7, 800.0], [45.8, 800.0], [45.9, 800.0], [46.0, 800.0], [46.1, 800.0], [46.2, 800.0], [46.3, 800.0], [46.4, 800.0], [46.5, 800.0], [46.6, 800.0], [46.7, 801.0], [46.8, 801.0], [46.9, 801.0], [47.0, 801.0], [47.1, 801.0], [47.2, 801.0], [47.3, 801.0], [47.4, 801.0], [47.5, 801.0], [47.6, 801.0], [47.7, 802.0], [47.8, 802.0], [47.9, 802.0], [48.0, 802.0], [48.1, 802.0], [48.2, 802.0], [48.3, 802.0], [48.4, 802.0], [48.5, 802.0], [48.6, 802.0], [48.7, 802.0], [48.8, 802.0], [48.9, 803.0], [49.0, 803.0], [49.1, 803.0], [49.2, 803.0], [49.3, 803.0], [49.4, 803.0], [49.5, 803.0], [49.6, 803.0], [49.7, 803.0], [49.8, 803.0], [49.9, 803.0], [50.0, 803.0], [50.1, 804.0], [50.2, 804.0], [50.3, 804.0], [50.4, 804.0], [50.5, 804.0], [50.6, 804.0], [50.7, 804.0], [50.8, 804.0], [50.9, 804.0], [51.0, 804.0], [51.1, 804.0], [51.2, 804.0], [51.3, 804.0], [51.4, 805.0], [51.5, 805.0], [51.6, 805.0], [51.7, 805.0], [51.8, 805.0], [51.9, 805.0], [52.0, 805.0], [52.1, 805.0], [52.2, 805.0], [52.3, 805.0], [52.4, 805.0], [52.5, 806.0], [52.6, 806.0], [52.7, 806.0], [52.8, 806.0], [52.9, 806.0], [53.0, 806.0], [53.1, 806.0], [53.2, 806.0], [53.3, 806.0], [53.4, 806.0], [53.5, 806.0], [53.6, 807.0], [53.7, 807.0], [53.8, 807.0], [53.9, 807.0], [54.0, 807.0], [54.1, 807.0], [54.2, 807.0], [54.3, 807.0], [54.4, 807.0], [54.5, 807.0], [54.6, 808.0], [54.7, 808.0], [54.8, 808.0], [54.9, 808.0], [55.0, 808.0], [55.1, 808.0], [55.2, 808.0], [55.3, 808.0], [55.4, 808.0], [55.5, 808.0], [55.6, 808.0], [55.7, 809.0], [55.8, 809.0], [55.9, 809.0], [56.0, 809.0], [56.1, 809.0], [56.2, 809.0], [56.3, 809.0], [56.4, 809.0], [56.5, 809.0], [56.6, 810.0], [56.7, 810.0], [56.8, 810.0], [56.9, 810.0], [57.0, 810.0], [57.1, 810.0], [57.2, 810.0], [57.3, 810.0], [57.4, 810.0], [57.5, 810.0], [57.6, 811.0], [57.7, 811.0], [57.8, 811.0], [57.9, 811.0], [58.0, 811.0], [58.1, 811.0], [58.2, 811.0], [58.3, 811.0], [58.4, 811.0], [58.5, 811.0], [58.6, 812.0], [58.7, 812.0], [58.8, 812.0], [58.9, 812.0], [59.0, 812.0], [59.1, 812.0], [59.2, 812.0], [59.3, 812.0], [59.4, 812.0], [59.5, 812.0], [59.6, 813.0], [59.7, 813.0], [59.8, 813.0], [59.9, 813.0], [60.0, 813.0], [60.1, 813.0], [60.2, 813.0], [60.3, 813.0], [60.4, 813.0], [60.5, 813.0], [60.6, 814.0], [60.7, 814.0], [60.8, 814.0], [60.9, 814.0], [61.0, 814.0], [61.1, 814.0], [61.2, 814.0], [61.3, 814.0], [61.4, 814.0], [61.5, 815.0], [61.6, 815.0], [61.7, 815.0], [61.8, 815.0], [61.9, 815.0], [62.0, 815.0], [62.1, 815.0], [62.2, 815.0], [62.3, 815.0], [62.4, 816.0], [62.5, 816.0], [62.6, 816.0], [62.7, 816.0], [62.8, 816.0], [62.9, 816.0], [63.0, 816.0], [63.1, 816.0], [63.2, 817.0], [63.3, 817.0], [63.4, 817.0], [63.5, 817.0], [63.6, 817.0], [63.7, 817.0], [63.8, 817.0], [63.9, 817.0], [64.0, 818.0], [64.1, 818.0], [64.2, 818.0], [64.3, 818.0], [64.4, 818.0], [64.5, 818.0], [64.6, 818.0], [64.7, 818.0], [64.8, 819.0], [64.9, 819.0], [65.0, 819.0], [65.1, 819.0], [65.2, 819.0], [65.3, 819.0], [65.4, 819.0], [65.5, 819.0], [65.6, 820.0], [65.7, 820.0], [65.8, 820.0], [65.9, 820.0], [66.0, 820.0], [66.1, 820.0], [66.2, 820.0], [66.3, 820.0], [66.4, 821.0], [66.5, 821.0], [66.6, 821.0], [66.7, 821.0], [66.8, 821.0], [66.9, 821.0], [67.0, 821.0], [67.1, 821.0], [67.2, 821.0], [67.3, 822.0], [67.4, 822.0], [67.5, 822.0], [67.6, 822.0], [67.7, 822.0], [67.8, 822.0], [67.9, 822.0], [68.0, 822.0], [68.1, 823.0], [68.2, 823.0], [68.3, 823.0], [68.4, 823.0], [68.5, 823.0], [68.6, 823.0], [68.7, 823.0], [68.8, 823.0], [68.9, 823.0], [69.0, 824.0], [69.1, 824.0], [69.2, 824.0], [69.3, 824.0], [69.4, 824.0], [69.5, 824.0], [69.6, 824.0], [69.7, 824.0], [69.8, 825.0], [69.9, 825.0], [70.0, 825.0], [70.1, 825.0], [70.2, 825.0], [70.3, 825.0], [70.4, 825.0], [70.5, 825.0], [70.6, 825.0], [70.7, 826.0], [70.8, 826.0], [70.9, 826.0], [71.0, 826.0], [71.1, 826.0], [71.2, 826.0], [71.3, 826.0], [71.4, 827.0], [71.5, 827.0], [71.6, 827.0], [71.7, 827.0], [71.8, 827.0], [71.9, 827.0], [72.0, 827.0], [72.1, 828.0], [72.2, 828.0], [72.3, 828.0], [72.4, 828.0], [72.5, 828.0], [72.6, 828.0], [72.7, 828.0], [72.8, 829.0], [72.9, 829.0], [73.0, 829.0], [73.1, 829.0], [73.2, 829.0], [73.3, 829.0], [73.4, 830.0], [73.5, 830.0], [73.6, 830.0], [73.7, 830.0], [73.8, 830.0], [73.9, 830.0], [74.0, 830.0], [74.1, 831.0], [74.2, 831.0], [74.3, 831.0], [74.4, 831.0], [74.5, 831.0], [74.6, 831.0], [74.7, 832.0], [74.8, 832.0], [74.9, 832.0], [75.0, 832.0], [75.1, 832.0], [75.2, 832.0], [75.3, 832.0], [75.4, 833.0], [75.5, 833.0], [75.6, 833.0], [75.7, 833.0], [75.8, 833.0], [75.9, 833.0], [76.0, 833.0], [76.1, 833.0], [76.2, 834.0], [76.3, 834.0], [76.4, 834.0], [76.5, 834.0], [76.6, 834.0], [76.7, 834.0], [76.8, 834.0], [76.9, 834.0], [77.0, 835.0], [77.1, 835.0], [77.2, 835.0], [77.3, 835.0], [77.4, 835.0], [77.5, 835.0], [77.6, 835.0], [77.7, 835.0], [77.8, 836.0], [77.9, 836.0], [78.0, 836.0], [78.1, 836.0], [78.2, 836.0], [78.3, 836.0], [78.4, 836.0], [78.5, 837.0], [78.6, 837.0], [78.7, 837.0], [78.8, 837.0], [78.9, 837.0], [79.0, 837.0], [79.1, 837.0], [79.2, 838.0], [79.3, 838.0], [79.4, 838.0], [79.5, 838.0], [79.6, 838.0], [79.7, 838.0], [79.8, 839.0], [79.9, 839.0], [80.0, 839.0], [80.1, 839.0], [80.2, 839.0], [80.3, 839.0], [80.4, 840.0], [80.5, 840.0], [80.6, 840.0], [80.7, 840.0], [80.8, 840.0], [80.9, 840.0], [81.0, 841.0], [81.1, 841.0], [81.2, 841.0], [81.3, 841.0], [81.4, 841.0], [81.5, 841.0], [81.6, 842.0], [81.7, 842.0], [81.8, 842.0], [81.9, 842.0], [82.0, 842.0], [82.1, 842.0], [82.2, 843.0], [82.3, 843.0], [82.4, 843.0], [82.5, 843.0], [82.6, 843.0], [82.7, 844.0], [82.8, 844.0], [82.9, 844.0], [83.0, 844.0], [83.1, 844.0], [83.2, 844.0], [83.3, 845.0], [83.4, 845.0], [83.5, 845.0], [83.6, 845.0], [83.7, 845.0], [83.8, 846.0], [83.9, 846.0], [84.0, 846.0], [84.1, 846.0], [84.2, 846.0], [84.3, 846.0], [84.4, 847.0], [84.5, 847.0], [84.6, 847.0], [84.7, 847.0], [84.8, 847.0], [84.9, 848.0], [85.0, 848.0], [85.1, 848.0], [85.2, 848.0], [85.3, 848.0], [85.4, 849.0], [85.5, 849.0], [85.6, 849.0], [85.7, 849.0], [85.8, 849.0], [85.9, 850.0], [86.0, 850.0], [86.1, 850.0], [86.2, 850.0], [86.3, 850.0], [86.4, 851.0], [86.5, 851.0], [86.6, 851.0], [86.7, 851.0], [86.8, 851.0], [86.9, 852.0], [87.0, 852.0], [87.1, 852.0], [87.2, 852.0], [87.3, 853.0], [87.4, 853.0], [87.5, 853.0], [87.6, 853.0], [87.7, 853.0], [87.8, 854.0], [87.9, 854.0], [88.0, 854.0], [88.1, 854.0], [88.2, 854.0], [88.3, 855.0], [88.4, 855.0], [88.5, 855.0], [88.6, 855.0], [88.7, 856.0], [88.8, 856.0], [88.9, 856.0], [89.0, 856.0], [89.1, 856.0], [89.2, 857.0], [89.3, 857.0], [89.4, 857.0], [89.5, 857.0], [89.6, 858.0], [89.7, 858.0], [89.8, 858.0], [89.9, 859.0], [90.0, 859.0], [90.1, 859.0], [90.2, 859.0], [90.3, 860.0], [90.4, 860.0], [90.5, 860.0], [90.6, 860.0], [90.7, 861.0], [90.8, 861.0], [90.9, 861.0], [91.0, 862.0], [91.1, 862.0], [91.2, 862.0], [91.3, 863.0], [91.4, 863.0], [91.5, 863.0], [91.6, 864.0], [91.7, 864.0], [91.8, 864.0], [91.9, 865.0], [92.0, 865.0], [92.1, 865.0], [92.2, 865.0], [92.3, 866.0], [92.4, 866.0], [92.5, 866.0], [92.6, 867.0], [92.7, 867.0], [92.8, 867.0], [92.9, 868.0], [93.0, 868.0], [93.1, 868.0], [93.2, 869.0], [93.3, 869.0], [93.4, 870.0], [93.5, 870.0], [93.6, 871.0], [93.7, 871.0], [93.8, 871.0], [93.9, 872.0], [94.0, 872.0], [94.1, 872.0], [94.2, 873.0], [94.3, 873.0], [94.4, 874.0], [94.5, 874.0], [94.6, 875.0], [94.7, 875.0], [94.8, 876.0], [94.9, 876.0], [95.0, 876.0], [95.1, 877.0], [95.2, 877.0], [95.3, 878.0], [95.4, 878.0], [95.5, 879.0], [95.6, 879.0], [95.7, 880.0], [95.8, 880.0], [95.9, 881.0], [96.0, 881.0], [96.1, 882.0], [96.2, 883.0], [96.3, 883.0], [96.4, 884.0], [96.5, 884.0], [96.6, 885.0], [96.7, 886.0], [96.8, 886.0], [96.9, 887.0], [97.0, 888.0], [97.1, 889.0], [97.2, 889.0], [97.3, 890.0], [97.4, 891.0], [97.5, 892.0], [97.6, 893.0], [97.7, 894.0], [97.8, 895.0], [97.9, 896.0], [98.0, 897.0], [98.1, 898.0], [98.2, 900.0], [98.3, 901.0], [98.4, 903.0], [98.5, 905.0], [98.6, 906.0], [98.7, 908.0], [98.8, 909.0], [98.9, 911.0], [99.0, 912.0], [99.1, 914.0], [99.2, 917.0], [99.3, 920.0], [99.4, 924.0], [99.5, 929.0], [99.6, 935.0], [99.7, 943.0], [99.8, 951.0], [99.9, 986.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 116748.0, "series": [{"data": [[0.0, 1.0], [1100.0, 42.0], [300.0, 29.0], [600.0, 26.0], [700.0, 101146.0], [100.0, 20.0], [200.0, 21.0], [400.0, 21.0], [800.0, 116748.0], [900.0, 3803.0], [500.0, 32.0], [1000.0, 170.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 92.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 221967.0, "series": [{"data": [[0.0, 92.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 221967.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 296.9264874798992, "minX": 1.6209015E12, "maxY": 300.0, "series": [{"data": [[1.62090162E12, 300.0], [1.6209021E12, 297.37466495746406], [1.62090192E12, 300.0], [1.6209015E12, 296.9264874798992], [1.62090198E12, 300.0], [1.6209018E12, 300.0], [1.62090186E12, 300.0], [1.62090168E12, 300.0], [1.62090174E12, 300.0], [1.62090156E12, 300.0], [1.62090204E12, 300.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6209021E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 226.0, "minX": 1.0, "maxY": 944.0, "series": [{"data": [[2.0, 783.0], [3.0, 783.0], [4.0, 782.0], [5.0, 786.0], [6.0, 785.0], [7.0, 790.0], [8.0, 791.0], [9.0, 793.0], [10.0, 794.0], [11.0, 797.0], [12.0, 797.0], [13.0, 798.0], [14.0, 801.0], [15.0, 801.0], [16.0, 802.0], [17.0, 801.0], [18.0, 804.0], [19.0, 806.0], [20.0, 809.0], [21.0, 811.0], [22.0, 811.0], [23.0, 814.0], [24.0, 812.0], [25.0, 817.0], [26.0, 824.0], [27.0, 824.0], [28.0, 824.0], [29.0, 824.0], [30.0, 844.0], [31.0, 844.0], [33.0, 840.0], [32.0, 844.0], [35.0, 844.0], [34.0, 838.0], [37.0, 844.0], [36.0, 845.0], [39.0, 843.0], [38.0, 844.0], [41.0, 843.0], [40.0, 844.0], [43.0, 842.0], [42.0, 843.0], [45.0, 836.0], [44.0, 843.0], [47.0, 836.0], [46.0, 835.0], [49.0, 836.0], [48.0, 836.0], [51.0, 836.0], [50.0, 836.0], [53.0, 835.0], [52.0, 837.0], [55.0, 836.0], [54.0, 837.0], [57.0, 838.0], [56.0, 836.0], [59.0, 838.0], [58.0, 837.0], [61.0, 838.0], [60.0, 837.0], [63.0, 834.0], [62.0, 834.0], [67.0, 835.0], [66.0, 834.0], [65.0, 834.0], [64.0, 834.0], [71.0, 835.0], [70.0, 836.0], [69.0, 835.0], [68.0, 834.0], [75.0, 836.0], [74.0, 835.0], [73.0, 836.0], [72.0, 835.0], [79.0, 836.0], [78.0, 836.0], [77.0, 836.0], [76.0, 836.0], [81.0, 464.0], [83.0, 836.0], [82.0, 836.0], [80.0, 835.0], [84.0, 473.5], [86.0, 477.0], [87.0, 477.5], [85.0, 835.0], [89.0, 481.0], [91.0, 483.5], [90.0, 836.0], [88.0, 836.0], [93.0, 472.0], [94.0, 471.0], [95.0, 492.5], [92.0, 836.0], [97.0, 476.5], [99.0, 486.0], [98.0, 837.0], [96.0, 836.0], [100.0, 498.0], [102.0, 502.0], [103.0, 507.0], [101.0, 840.0], [105.0, 509.0], [106.0, 517.0], [107.0, 855.0], [104.0, 846.0], [108.0, 518.5], [110.0, 520.0], [111.0, 414.0], [109.0, 856.0], [113.0, 531.5], [115.0, 533.0], [114.0, 861.0], [112.0, 855.0], [119.0, 861.0], [118.0, 860.0], [117.0, 860.0], [116.0, 861.0], [120.0, 528.0], [122.0, 541.0], [123.0, 532.5], [121.0, 861.0], [125.0, 562.5], [127.0, 546.0], [126.0, 879.0], [124.0, 861.0], [128.0, 548.0], [129.0, 226.0], [131.0, 554.5], [132.0, 554.5], [134.0, 557.5], [135.0, 565.0], [133.0, 879.0], [130.0, 880.5], [142.0, 580.0], [143.0, 564.0], [141.0, 877.0], [140.0, 877.0], [139.0, 878.0], [138.0, 879.0], [137.0, 879.0], [136.0, 878.0], [145.0, 583.5], [146.0, 582.0], [148.0, 589.0], [149.0, 578.5], [151.0, 581.0], [150.0, 876.0], [147.0, 875.0], [144.0, 875.0], [152.0, 583.0], [153.0, 586.0], [155.0, 599.0], [157.0, 590.5], [158.0, 591.5], [159.0, 875.0], [156.0, 875.0], [154.0, 876.0], [160.0, 585.5], [161.0, 596.0], [163.0, 600.5], [164.0, 591.5], [165.0, 608.0], [167.0, 607.5], [166.0, 876.0], [162.0, 876.0], [168.0, 609.5], [170.0, 609.0], [172.0, 625.5], [173.0, 613.5], [174.0, 605.0], [175.0, 875.0], [171.0, 875.0], [169.0, 876.0], [176.0, 631.5], [177.0, 633.0], [179.0, 608.5], [180.0, 625.0], [183.0, 642.0], [182.0, 874.0], [181.0, 876.0], [178.0, 875.0], [184.0, 574.3333333333334], [189.0, 507.0], [191.0, 872.0], [190.0, 874.0], [188.0, 874.0], [187.0, 874.0], [186.0, 874.0], [185.0, 874.0], [195.0, 629.5], [196.0, 630.0], [199.0, 632.0], [198.0, 874.0], [197.0, 872.0], [194.0, 876.0], [193.0, 876.0], [192.0, 874.0], [201.0, 632.0], [202.0, 636.0], [204.0, 634.5], [205.0, 635.5], [207.0, 635.5], [206.0, 875.0], [203.0, 874.0], [200.0, 875.0], [208.0, 636.0], [209.0, 636.5], [215.0, 874.0], [214.0, 874.0], [213.0, 874.0], [212.0, 874.0], [211.0, 872.0], [210.0, 874.0], [217.0, 647.5], [222.0, 652.0], [223.0, 872.0], [221.0, 873.0], [220.0, 873.0], [219.0, 873.0], [218.0, 873.0], [216.0, 874.0], [224.0, 654.0], [225.0, 655.5], [226.0, 656.0], [231.0, 660.0], [230.0, 874.0], [229.0, 874.0], [228.0, 874.0], [227.0, 874.0], [232.0, 660.5], [234.0, 657.5], [235.0, 660.0], [239.0, 867.0], [238.0, 868.0], [237.0, 867.0], [236.0, 867.0], [233.0, 866.0], [246.0, 675.0], [247.0, 677.0], [245.0, 868.0], [244.0, 869.0], [243.0, 867.0], [242.0, 869.0], [241.0, 869.0], [240.0, 868.0], [248.0, 677.0], [250.0, 680.5], [251.0, 681.0], [253.0, 684.0], [254.0, 685.0], [255.0, 686.0], [252.0, 871.0], [249.0, 871.0], [258.0, 709.5], [257.0, 687.0], [263.0, 923.0], [256.0, 871.0], [259.0, 710.5], [261.0, 716.5], [260.0, 916.0], [262.0, 717.5], [264.0, 717.0], [265.0, 721.0], [267.0, 925.0], [266.0, 924.0], [270.0, 530.0], [268.0, 924.0], [284.0, 837.5], [272.0, 532.5], [275.0, 671.3333333333334], [274.0, 944.0], [277.0, 540.0], [279.0, 834.25], [278.0, 934.0], [280.0, 736.5], [281.0, 547.0], [283.0, 718.5], [282.0, 918.5], [286.0, 728.0], [285.0, 900.3333333333334], [287.0, 814.5], [290.0, 830.8], [288.0, 729.0], [289.0, 899.3333333333334], [291.0, 840.3333333333334], [292.0, 785.6666666666666], [293.0, 894.0], [294.0, 785.6666666666666], [295.0, 812.25], [296.0, 813.75], [300.0, 810.8388127318235], [297.0, 892.0], [1.0, 783.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[299.7368492157514, 810.6736047627005]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11462.9, "minX": 1.6209015E12, "maxY": 2940494.8333333335, "series": [{"data": [[1.62090162E12, 2900497.85], [1.6209021E12, 2235922.566666667], [1.62090192E12, 2918086.1], [1.6209015E12, 567123.35], [1.62090198E12, 2903754.933333333], [1.6209018E12, 2913265.6166666667], [1.62090186E12, 2878219.4], [1.62090168E12, 2909747.966666667], [1.62090174E12, 2940494.8333333335], [1.62090156E12, 2898804.1666666665], [1.62090204E12, 2864669.933333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62090162E12, 58625.9], [1.6209021E12, 45193.26666666667], [1.62090192E12, 58981.4], [1.6209015E12, 11462.9], [1.62090198E12, 58691.73333333333], [1.6209018E12, 58883.96666666667], [1.62090186E12, 58175.6], [1.62090168E12, 58812.86666666667], [1.62090174E12, 59434.333333333336], [1.62090156E12, 58591.666666666664], [1.62090204E12, 57901.73333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6209021E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 797.5879042977432, "minX": 1.6209015E12, "maxY": 854.1709166092363, "series": [{"data": [[1.62090162E12, 808.558550060641], [1.6209021E12, 832.6495163733812], [1.62090192E12, 803.5025895169193], [1.6209015E12, 854.1709166092363], [1.62090198E12, 808.1820262024431], [1.6209018E12, 804.6273869683856], [1.62090186E12, 814.7734474017718], [1.62090168E12, 806.0481776663369], [1.62090174E12, 797.5879042977432], [1.62090156E12, 809.4257078651706], [1.62090204E12, 818.3042113880243]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6209021E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 797.5731058927761, "minX": 1.6209015E12, "maxY": 854.1536871123368, "series": [{"data": [[1.62090162E12, 808.538157481023], [1.6209021E12, 832.6343083556716], [1.62090192E12, 803.4845075453129], [1.6209015E12, 854.1536871123368], [1.62090198E12, 808.1675789662606], [1.6209018E12, 804.6124055274804], [1.62090186E12, 814.7575140322348], [1.62090168E12, 806.0326855914687], [1.62090174E12, 797.5731058927761], [1.62090156E12, 809.4062471910144], [1.62090204E12, 818.2873385482966]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6209021E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6209015E12, "maxY": 0.5221686193429802, "series": [{"data": [[1.62090162E12, 0.018326371109014954], [1.6209021E12, 0.0], [1.62090192E12, 0.016385391552817284], [1.6209015E12, 0.5221686193429802], [1.62090198E12, 0.01642139267767408], [1.6209018E12, 0.016725548946827047], [1.62090186E12, 0.01824189751946407], [1.62090168E12, 0.01737261574281371], [1.62090174E12, 0.017235268054940203], [1.62090156E12, 0.018741573033707857], [1.62090204E12, 0.016281608149899995]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6209021E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 90.0, "minX": 1.6209015E12, "maxY": 1126.0, "series": [{"data": [[1.62090162E12, 941.0], [1.6209021E12, 969.0], [1.62090192E12, 919.0], [1.6209015E12, 1126.0], [1.62090198E12, 931.0], [1.6209018E12, 953.0], [1.62090186E12, 989.0], [1.62090168E12, 942.0], [1.62090174E12, 962.0], [1.62090156E12, 945.0], [1.62090204E12, 932.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62090162E12, 861.0], [1.6209021E12, 885.0], [1.62090192E12, 842.0], [1.6209015E12, 944.0], [1.62090198E12, 847.0], [1.6209018E12, 854.0], [1.62090186E12, 864.0], [1.62090168E12, 852.0], [1.62090174E12, 833.0], [1.62090156E12, 855.0], [1.62090204E12, 861.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62090162E12, 904.9900000000016], [1.6209021E12, 923.0], [1.62090192E12, 880.0], [1.6209015E12, 1099.0], [1.62090198E12, 880.0], [1.6209018E12, 912.0], [1.62090186E12, 932.0], [1.62090168E12, 904.0], [1.62090174E12, 878.0], [1.62090156E12, 910.0], [1.62090204E12, 898.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62090162E12, 875.0], [1.6209021E12, 899.0], [1.62090192E12, 855.0], [1.6209015E12, 989.3000000000002], [1.62090198E12, 860.0], [1.6209018E12, 869.0], [1.62090186E12, 881.0], [1.62090168E12, 869.0], [1.62090174E12, 848.0], [1.62090156E12, 874.0], [1.62090204E12, 875.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62090162E12, 752.0], [1.6209021E12, 743.0], [1.62090192E12, 763.0], [1.6209015E12, 90.0], [1.62090198E12, 759.0], [1.6209018E12, 715.0], [1.62090186E12, 715.0], [1.62090168E12, 759.0], [1.62090174E12, 726.0], [1.62090156E12, 756.0], [1.62090204E12, 765.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62090162E12, 803.0], [1.6209021E12, 826.0], [1.62090192E12, 793.0], [1.6209015E12, 871.0], [1.62090198E12, 804.0], [1.6209018E12, 799.0], [1.62090186E12, 810.0], [1.62090168E12, 793.0], [1.62090174E12, 790.0], [1.62090156E12, 796.0], [1.62090204E12, 816.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6209021E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 120.0, "minX": 13.0, "maxY": 1025.0, "series": [{"data": [[13.0, 120.0], [190.0, 547.0], [247.0, 861.0], [312.0, 1025.0], [313.0, 944.0], [335.0, 868.0], [329.0, 899.0], [327.0, 907.0], [330.0, 895.0], [321.0, 904.0], [320.0, 928.0], [333.0, 864.0], [332.0, 844.0], [324.0, 910.0], [349.0, 848.0], [338.0, 875.0], [342.0, 838.0], [337.0, 913.0], [336.0, 879.0], [343.0, 852.0], [344.0, 875.0], [348.0, 842.0], [339.0, 861.0], [346.0, 813.0], [347.0, 824.0], [345.0, 850.0], [341.0, 883.0], [340.0, 862.0], [351.0, 839.0], [350.0, 840.0], [359.0, 835.0], [365.0, 816.0], [366.0, 815.5], [358.0, 843.0], [357.0, 828.0], [361.0, 824.0], [360.0, 815.0], [362.0, 815.0], [363.0, 810.0], [367.0, 823.0], [356.0, 835.0], [364.0, 810.0], [355.0, 834.0], [354.0, 831.0], [352.0, 833.0], [353.0, 830.0], [382.0, 790.0], [369.0, 822.0], [376.0, 802.0], [383.0, 781.0], [377.0, 804.0], [368.0, 808.0], [379.0, 793.0], [381.0, 793.0], [380.0, 789.0], [371.0, 801.0], [370.0, 794.0], [373.0, 796.0], [372.0, 802.0], [374.0, 792.0], [378.0, 798.0], [375.0, 800.0], [386.0, 782.0], [398.0, 772.0], [387.0, 784.0], [397.0, 791.0], [392.0, 777.0], [399.0, 765.0], [388.0, 775.0], [389.0, 794.0], [393.0, 783.0], [390.0, 784.0], [395.0, 782.5], [385.0, 787.0], [394.0, 774.0], [384.0, 783.0], [391.0, 776.0], [400.0, 760.5], [401.0, 765.0], [403.0, 765.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 403.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 120.0, "minX": 13.0, "maxY": 1025.0, "series": [{"data": [[13.0, 120.0], [190.0, 547.0], [247.0, 861.0], [312.0, 1025.0], [313.0, 944.0], [335.0, 868.0], [329.0, 899.0], [327.0, 907.0], [330.0, 895.0], [321.0, 904.0], [320.0, 928.0], [333.0, 864.0], [332.0, 844.0], [324.0, 910.0], [349.0, 848.0], [338.0, 875.0], [342.0, 838.0], [337.0, 913.0], [336.0, 879.0], [343.0, 852.0], [344.0, 875.0], [348.0, 842.0], [339.0, 861.0], [346.0, 813.0], [347.0, 824.0], [345.0, 850.0], [341.0, 883.0], [340.0, 862.0], [351.0, 839.0], [350.0, 840.0], [359.0, 835.0], [365.0, 816.0], [366.0, 815.0], [358.0, 843.0], [357.0, 828.0], [361.0, 824.0], [360.0, 815.0], [362.0, 815.0], [363.0, 810.0], [367.0, 823.0], [356.0, 835.0], [364.0, 810.0], [355.0, 834.0], [354.0, 831.0], [352.0, 833.0], [353.0, 830.0], [382.0, 790.0], [369.0, 822.0], [376.0, 802.0], [383.0, 781.0], [377.0, 804.0], [368.0, 808.0], [379.0, 793.0], [381.0, 793.0], [380.0, 789.0], [371.0, 801.0], [370.0, 794.0], [373.0, 796.0], [372.0, 802.0], [374.0, 792.0], [378.0, 798.0], [375.0, 800.0], [386.0, 782.0], [398.0, 772.0], [387.0, 784.0], [397.0, 791.0], [392.0, 777.0], [399.0, 765.0], [388.0, 775.0], [389.0, 794.0], [393.0, 783.0], [390.0, 784.0], [395.0, 782.5], [385.0, 787.0], [394.0, 774.0], [384.0, 783.0], [391.0, 776.0], [400.0, 760.0], [401.0, 765.0], [403.0, 765.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 403.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 77.55, "minX": 1.6209015E12, "maxY": 376.1666666666667, "series": [{"data": [[1.62090162E12, 371.05], [1.6209021E12, 281.03333333333336], [1.62090192E12, 373.3], [1.6209015E12, 77.55], [1.62090198E12, 371.45], [1.6209018E12, 372.68333333333334], [1.62090186E12, 368.2], [1.62090168E12, 372.23333333333335], [1.62090174E12, 376.1666666666667], [1.62090156E12, 370.8333333333333], [1.62090204E12, 366.48333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6209021E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 72.55, "minX": 1.6209015E12, "maxY": 376.1666666666667, "series": [{"data": [[1.62090162E12, 371.05], [1.6209021E12, 286.03333333333336], [1.62090192E12, 373.3], [1.6209015E12, 72.55], [1.62090198E12, 371.46666666666664], [1.6209018E12, 372.68333333333334], [1.62090186E12, 368.2], [1.62090168E12, 372.23333333333335], [1.62090174E12, 376.1666666666667], [1.62090156E12, 370.8333333333333], [1.62090204E12, 366.46666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6209021E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 72.55, "minX": 1.6209015E12, "maxY": 376.1666666666667, "series": [{"data": [[1.62090162E12, 371.05], [1.6209021E12, 286.03333333333336], [1.62090192E12, 373.3], [1.6209015E12, 72.55], [1.62090198E12, 371.46666666666664], [1.6209018E12, 372.68333333333334], [1.62090186E12, 368.2], [1.62090168E12, 372.23333333333335], [1.62090174E12, 376.1666666666667], [1.62090156E12, 370.8333333333333], [1.62090204E12, 366.46666666666664]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6209021E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 72.55, "minX": 1.6209015E12, "maxY": 376.1666666666667, "series": [{"data": [[1.62090162E12, 371.05], [1.6209021E12, 286.03333333333336], [1.62090192E12, 373.3], [1.6209015E12, 72.55], [1.62090198E12, 371.46666666666664], [1.6209018E12, 372.68333333333334], [1.62090186E12, 368.2], [1.62090168E12, 372.23333333333335], [1.62090174E12, 376.1666666666667], [1.62090156E12, 370.8333333333333], [1.62090204E12, 366.46666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6209021E12, "title": "Total Transactions Per Second"}},
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

