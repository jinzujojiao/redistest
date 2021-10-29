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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 215.0, "series": [{"data": [[0.0, 4.0], [0.1, 6.0], [0.2, 6.0], [0.3, 7.0], [0.4, 7.0], [0.5, 7.0], [0.6, 7.0], [0.7, 7.0], [0.8, 8.0], [0.9, 8.0], [1.0, 8.0], [1.1, 8.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 8.0], [1.6, 8.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 9.0], [2.3, 9.0], [2.4, 9.0], [2.5, 9.0], [2.6, 9.0], [2.7, 9.0], [2.8, 9.0], [2.9, 9.0], [3.0, 9.0], [3.1, 9.0], [3.2, 9.0], [3.3, 9.0], [3.4, 9.0], [3.5, 9.0], [3.6, 9.0], [3.7, 9.0], [3.8, 9.0], [3.9, 9.0], [4.0, 9.0], [4.1, 9.0], [4.2, 9.0], [4.3, 9.0], [4.4, 9.0], [4.5, 9.0], [4.6, 9.0], [4.7, 10.0], [4.8, 10.0], [4.9, 10.0], [5.0, 10.0], [5.1, 10.0], [5.2, 10.0], [5.3, 10.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 10.0], [5.9, 10.0], [6.0, 10.0], [6.1, 10.0], [6.2, 10.0], [6.3, 10.0], [6.4, 10.0], [6.5, 10.0], [6.6, 10.0], [6.7, 10.0], [6.8, 10.0], [6.9, 10.0], [7.0, 10.0], [7.1, 10.0], [7.2, 10.0], [7.3, 10.0], [7.4, 10.0], [7.5, 10.0], [7.6, 10.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 10.0], [8.9, 11.0], [9.0, 11.0], [9.1, 11.0], [9.2, 11.0], [9.3, 11.0], [9.4, 11.0], [9.5, 11.0], [9.6, 11.0], [9.7, 11.0], [9.8, 11.0], [9.9, 11.0], [10.0, 11.0], [10.1, 11.0], [10.2, 11.0], [10.3, 11.0], [10.4, 11.0], [10.5, 11.0], [10.6, 11.0], [10.7, 11.0], [10.8, 11.0], [10.9, 11.0], [11.0, 11.0], [11.1, 11.0], [11.2, 11.0], [11.3, 11.0], [11.4, 11.0], [11.5, 11.0], [11.6, 11.0], [11.7, 11.0], [11.8, 11.0], [11.9, 11.0], [12.0, 11.0], [12.1, 11.0], [12.2, 11.0], [12.3, 11.0], [12.4, 11.0], [12.5, 11.0], [12.6, 11.0], [12.7, 12.0], [12.8, 12.0], [12.9, 12.0], [13.0, 12.0], [13.1, 12.0], [13.2, 12.0], [13.3, 12.0], [13.4, 12.0], [13.5, 12.0], [13.6, 12.0], [13.7, 12.0], [13.8, 12.0], [13.9, 12.0], [14.0, 12.0], [14.1, 12.0], [14.2, 12.0], [14.3, 12.0], [14.4, 12.0], [14.5, 12.0], [14.6, 12.0], [14.7, 12.0], [14.8, 12.0], [14.9, 12.0], [15.0, 12.0], [15.1, 12.0], [15.2, 12.0], [15.3, 12.0], [15.4, 12.0], [15.5, 12.0], [15.6, 12.0], [15.7, 12.0], [15.8, 12.0], [15.9, 13.0], [16.0, 13.0], [16.1, 13.0], [16.2, 13.0], [16.3, 13.0], [16.4, 13.0], [16.5, 13.0], [16.6, 13.0], [16.7, 13.0], [16.8, 13.0], [16.9, 13.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 13.0], [17.4, 13.0], [17.5, 13.0], [17.6, 13.0], [17.7, 13.0], [17.8, 13.0], [17.9, 13.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 14.0], [19.1, 14.0], [19.2, 14.0], [19.3, 14.0], [19.4, 14.0], [19.5, 14.0], [19.6, 14.0], [19.7, 14.0], [19.8, 14.0], [19.9, 14.0], [20.0, 14.0], [20.1, 14.0], [20.2, 14.0], [20.3, 14.0], [20.4, 14.0], [20.5, 14.0], [20.6, 14.0], [20.7, 14.0], [20.8, 14.0], [20.9, 14.0], [21.0, 14.0], [21.1, 14.0], [21.2, 14.0], [21.3, 14.0], [21.4, 14.0], [21.5, 14.0], [21.6, 14.0], [21.7, 14.0], [21.8, 14.0], [21.9, 14.0], [22.0, 15.0], [22.1, 15.0], [22.2, 15.0], [22.3, 15.0], [22.4, 15.0], [22.5, 15.0], [22.6, 15.0], [22.7, 15.0], [22.8, 15.0], [22.9, 15.0], [23.0, 15.0], [23.1, 15.0], [23.2, 15.0], [23.3, 15.0], [23.4, 15.0], [23.5, 15.0], [23.6, 15.0], [23.7, 15.0], [23.8, 15.0], [23.9, 15.0], [24.0, 15.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 15.0], [24.9, 15.0], [25.0, 15.0], [25.1, 15.0], [25.2, 16.0], [25.3, 16.0], [25.4, 16.0], [25.5, 16.0], [25.6, 16.0], [25.7, 16.0], [25.8, 16.0], [25.9, 16.0], [26.0, 16.0], [26.1, 16.0], [26.2, 16.0], [26.3, 16.0], [26.4, 16.0], [26.5, 16.0], [26.6, 16.0], [26.7, 16.0], [26.8, 16.0], [26.9, 16.0], [27.0, 16.0], [27.1, 16.0], [27.2, 16.0], [27.3, 16.0], [27.4, 16.0], [27.5, 16.0], [27.6, 16.0], [27.7, 16.0], [27.8, 16.0], [27.9, 16.0], [28.0, 16.0], [28.1, 16.0], [28.2, 16.0], [28.3, 16.0], [28.4, 16.0], [28.5, 16.0], [28.6, 17.0], [28.7, 17.0], [28.8, 17.0], [28.9, 17.0], [29.0, 17.0], [29.1, 17.0], [29.2, 17.0], [29.3, 17.0], [29.4, 17.0], [29.5, 17.0], [29.6, 17.0], [29.7, 17.0], [29.8, 17.0], [29.9, 17.0], [30.0, 17.0], [30.1, 17.0], [30.2, 17.0], [30.3, 17.0], [30.4, 17.0], [30.5, 17.0], [30.6, 17.0], [30.7, 17.0], [30.8, 17.0], [30.9, 17.0], [31.0, 17.0], [31.1, 17.0], [31.2, 17.0], [31.3, 17.0], [31.4, 17.0], [31.5, 17.0], [31.6, 17.0], [31.7, 17.0], [31.8, 17.0], [31.9, 17.0], [32.0, 17.0], [32.1, 17.0], [32.2, 18.0], [32.3, 18.0], [32.4, 18.0], [32.5, 18.0], [32.6, 18.0], [32.7, 18.0], [32.8, 18.0], [32.9, 18.0], [33.0, 18.0], [33.1, 18.0], [33.2, 18.0], [33.3, 18.0], [33.4, 18.0], [33.5, 18.0], [33.6, 18.0], [33.7, 18.0], [33.8, 18.0], [33.9, 18.0], [34.0, 18.0], [34.1, 18.0], [34.2, 18.0], [34.3, 18.0], [34.4, 18.0], [34.5, 18.0], [34.6, 18.0], [34.7, 18.0], [34.8, 18.0], [34.9, 18.0], [35.0, 18.0], [35.1, 18.0], [35.2, 18.0], [35.3, 18.0], [35.4, 18.0], [35.5, 18.0], [35.6, 18.0], [35.7, 18.0], [35.8, 18.0], [35.9, 19.0], [36.0, 19.0], [36.1, 19.0], [36.2, 19.0], [36.3, 19.0], [36.4, 19.0], [36.5, 19.0], [36.6, 19.0], [36.7, 19.0], [36.8, 19.0], [36.9, 19.0], [37.0, 19.0], [37.1, 19.0], [37.2, 19.0], [37.3, 19.0], [37.4, 19.0], [37.5, 19.0], [37.6, 19.0], [37.7, 19.0], [37.8, 19.0], [37.9, 19.0], [38.0, 19.0], [38.1, 19.0], [38.2, 19.0], [38.3, 19.0], [38.4, 19.0], [38.5, 19.0], [38.6, 19.0], [38.7, 19.0], [38.8, 19.0], [38.9, 19.0], [39.0, 19.0], [39.1, 19.0], [39.2, 19.0], [39.3, 19.0], [39.4, 19.0], [39.5, 19.0], [39.6, 19.0], [39.7, 20.0], [39.8, 20.0], [39.9, 20.0], [40.0, 20.0], [40.1, 20.0], [40.2, 20.0], [40.3, 20.0], [40.4, 20.0], [40.5, 20.0], [40.6, 20.0], [40.7, 20.0], [40.8, 20.0], [40.9, 20.0], [41.0, 20.0], [41.1, 20.0], [41.2, 20.0], [41.3, 20.0], [41.4, 20.0], [41.5, 20.0], [41.6, 20.0], [41.7, 20.0], [41.8, 20.0], [41.9, 20.0], [42.0, 20.0], [42.1, 20.0], [42.2, 20.0], [42.3, 20.0], [42.4, 20.0], [42.5, 20.0], [42.6, 20.0], [42.7, 20.0], [42.8, 20.0], [42.9, 20.0], [43.0, 20.0], [43.1, 20.0], [43.2, 20.0], [43.3, 20.0], [43.4, 20.0], [43.5, 20.0], [43.6, 21.0], [43.7, 21.0], [43.8, 21.0], [43.9, 21.0], [44.0, 21.0], [44.1, 21.0], [44.2, 21.0], [44.3, 21.0], [44.4, 21.0], [44.5, 21.0], [44.6, 21.0], [44.7, 21.0], [44.8, 21.0], [44.9, 21.0], [45.0, 21.0], [45.1, 21.0], [45.2, 21.0], [45.3, 21.0], [45.4, 21.0], [45.5, 21.0], [45.6, 21.0], [45.7, 21.0], [45.8, 21.0], [45.9, 21.0], [46.0, 21.0], [46.1, 21.0], [46.2, 21.0], [46.3, 21.0], [46.4, 21.0], [46.5, 21.0], [46.6, 21.0], [46.7, 21.0], [46.8, 21.0], [46.9, 21.0], [47.0, 21.0], [47.1, 21.0], [47.2, 21.0], [47.3, 21.0], [47.4, 21.0], [47.5, 21.0], [47.6, 22.0], [47.7, 22.0], [47.8, 22.0], [47.9, 22.0], [48.0, 22.0], [48.1, 22.0], [48.2, 22.0], [48.3, 22.0], [48.4, 22.0], [48.5, 22.0], [48.6, 22.0], [48.7, 22.0], [48.8, 22.0], [48.9, 22.0], [49.0, 22.0], [49.1, 22.0], [49.2, 22.0], [49.3, 22.0], [49.4, 22.0], [49.5, 22.0], [49.6, 22.0], [49.7, 22.0], [49.8, 22.0], [49.9, 22.0], [50.0, 22.0], [50.1, 22.0], [50.2, 22.0], [50.3, 22.0], [50.4, 22.0], [50.5, 22.0], [50.6, 22.0], [50.7, 22.0], [50.8, 22.0], [50.9, 22.0], [51.0, 22.0], [51.1, 22.0], [51.2, 22.0], [51.3, 22.0], [51.4, 22.0], [51.5, 22.0], [51.6, 23.0], [51.7, 23.0], [51.8, 23.0], [51.9, 23.0], [52.0, 23.0], [52.1, 23.0], [52.2, 23.0], [52.3, 23.0], [52.4, 23.0], [52.5, 23.0], [52.6, 23.0], [52.7, 23.0], [52.8, 23.0], [52.9, 23.0], [53.0, 23.0], [53.1, 23.0], [53.2, 23.0], [53.3, 23.0], [53.4, 23.0], [53.5, 23.0], [53.6, 23.0], [53.7, 23.0], [53.8, 23.0], [53.9, 23.0], [54.0, 23.0], [54.1, 23.0], [54.2, 23.0], [54.3, 23.0], [54.4, 23.0], [54.5, 23.0], [54.6, 23.0], [54.7, 23.0], [54.8, 23.0], [54.9, 23.0], [55.0, 23.0], [55.1, 23.0], [55.2, 23.0], [55.3, 23.0], [55.4, 23.0], [55.5, 23.0], [55.6, 24.0], [55.7, 24.0], [55.8, 24.0], [55.9, 24.0], [56.0, 24.0], [56.1, 24.0], [56.2, 24.0], [56.3, 24.0], [56.4, 24.0], [56.5, 24.0], [56.6, 24.0], [56.7, 24.0], [56.8, 24.0], [56.9, 24.0], [57.0, 24.0], [57.1, 24.0], [57.2, 24.0], [57.3, 24.0], [57.4, 24.0], [57.5, 24.0], [57.6, 24.0], [57.7, 24.0], [57.8, 24.0], [57.9, 24.0], [58.0, 24.0], [58.1, 24.0], [58.2, 24.0], [58.3, 24.0], [58.4, 24.0], [58.5, 24.0], [58.6, 24.0], [58.7, 24.0], [58.8, 24.0], [58.9, 24.0], [59.0, 24.0], [59.1, 24.0], [59.2, 24.0], [59.3, 24.0], [59.4, 24.0], [59.5, 24.0], [59.6, 25.0], [59.7, 25.0], [59.8, 25.0], [59.9, 25.0], [60.0, 25.0], [60.1, 25.0], [60.2, 25.0], [60.3, 25.0], [60.4, 25.0], [60.5, 25.0], [60.6, 25.0], [60.7, 25.0], [60.8, 25.0], [60.9, 25.0], [61.0, 25.0], [61.1, 25.0], [61.2, 25.0], [61.3, 25.0], [61.4, 25.0], [61.5, 25.0], [61.6, 25.0], [61.7, 25.0], [61.8, 25.0], [61.9, 25.0], [62.0, 25.0], [62.1, 25.0], [62.2, 25.0], [62.3, 25.0], [62.4, 25.0], [62.5, 25.0], [62.6, 25.0], [62.7, 25.0], [62.8, 25.0], [62.9, 25.0], [63.0, 25.0], [63.1, 25.0], [63.2, 25.0], [63.3, 25.0], [63.4, 25.0], [63.5, 25.0], [63.6, 26.0], [63.7, 26.0], [63.8, 26.0], [63.9, 26.0], [64.0, 26.0], [64.1, 26.0], [64.2, 26.0], [64.3, 26.0], [64.4, 26.0], [64.5, 26.0], [64.6, 26.0], [64.7, 26.0], [64.8, 26.0], [64.9, 26.0], [65.0, 26.0], [65.1, 26.0], [65.2, 26.0], [65.3, 26.0], [65.4, 26.0], [65.5, 26.0], [65.6, 26.0], [65.7, 26.0], [65.8, 26.0], [65.9, 26.0], [66.0, 26.0], [66.1, 26.0], [66.2, 26.0], [66.3, 26.0], [66.4, 26.0], [66.5, 26.0], [66.6, 26.0], [66.7, 26.0], [66.8, 26.0], [66.9, 26.0], [67.0, 26.0], [67.1, 26.0], [67.2, 26.0], [67.3, 26.0], [67.4, 27.0], [67.5, 27.0], [67.6, 27.0], [67.7, 27.0], [67.8, 27.0], [67.9, 27.0], [68.0, 27.0], [68.1, 27.0], [68.2, 27.0], [68.3, 27.0], [68.4, 27.0], [68.5, 27.0], [68.6, 27.0], [68.7, 27.0], [68.8, 27.0], [68.9, 27.0], [69.0, 27.0], [69.1, 27.0], [69.2, 27.0], [69.3, 27.0], [69.4, 27.0], [69.5, 27.0], [69.6, 27.0], [69.7, 27.0], [69.8, 27.0], [69.9, 27.0], [70.0, 27.0], [70.1, 27.0], [70.2, 27.0], [70.3, 27.0], [70.4, 27.0], [70.5, 27.0], [70.6, 27.0], [70.7, 27.0], [70.8, 27.0], [70.9, 27.0], [71.0, 27.0], [71.1, 28.0], [71.2, 28.0], [71.3, 28.0], [71.4, 28.0], [71.5, 28.0], [71.6, 28.0], [71.7, 28.0], [71.8, 28.0], [71.9, 28.0], [72.0, 28.0], [72.1, 28.0], [72.2, 28.0], [72.3, 28.0], [72.4, 28.0], [72.5, 28.0], [72.6, 28.0], [72.7, 28.0], [72.8, 28.0], [72.9, 28.0], [73.0, 28.0], [73.1, 28.0], [73.2, 28.0], [73.3, 28.0], [73.4, 28.0], [73.5, 28.0], [73.6, 28.0], [73.7, 28.0], [73.8, 28.0], [73.9, 28.0], [74.0, 28.0], [74.1, 28.0], [74.2, 28.0], [74.3, 28.0], [74.4, 28.0], [74.5, 29.0], [74.6, 29.0], [74.7, 29.0], [74.8, 29.0], [74.9, 29.0], [75.0, 29.0], [75.1, 29.0], [75.2, 29.0], [75.3, 29.0], [75.4, 29.0], [75.5, 29.0], [75.6, 29.0], [75.7, 29.0], [75.8, 29.0], [75.9, 29.0], [76.0, 29.0], [76.1, 29.0], [76.2, 29.0], [76.3, 29.0], [76.4, 29.0], [76.5, 29.0], [76.6, 29.0], [76.7, 29.0], [76.8, 29.0], [76.9, 29.0], [77.0, 29.0], [77.1, 29.0], [77.2, 29.0], [77.3, 29.0], [77.4, 29.0], [77.5, 29.0], [77.6, 30.0], [77.7, 30.0], [77.8, 30.0], [77.9, 30.0], [78.0, 30.0], [78.1, 30.0], [78.2, 30.0], [78.3, 30.0], [78.4, 30.0], [78.5, 30.0], [78.6, 30.0], [78.7, 30.0], [78.8, 30.0], [78.9, 30.0], [79.0, 30.0], [79.1, 30.0], [79.2, 30.0], [79.3, 30.0], [79.4, 30.0], [79.5, 30.0], [79.6, 30.0], [79.7, 30.0], [79.8, 30.0], [79.9, 30.0], [80.0, 30.0], [80.1, 30.0], [80.2, 30.0], [80.3, 30.0], [80.4, 31.0], [80.5, 31.0], [80.6, 31.0], [80.7, 31.0], [80.8, 31.0], [80.9, 31.0], [81.0, 31.0], [81.1, 31.0], [81.2, 31.0], [81.3, 31.0], [81.4, 31.0], [81.5, 31.0], [81.6, 31.0], [81.7, 31.0], [81.8, 31.0], [81.9, 31.0], [82.0, 31.0], [82.1, 31.0], [82.2, 31.0], [82.3, 31.0], [82.4, 31.0], [82.5, 31.0], [82.6, 31.0], [82.7, 31.0], [82.8, 31.0], [82.9, 32.0], [83.0, 32.0], [83.1, 32.0], [83.2, 32.0], [83.3, 32.0], [83.4, 32.0], [83.5, 32.0], [83.6, 32.0], [83.7, 32.0], [83.8, 32.0], [83.9, 32.0], [84.0, 32.0], [84.1, 32.0], [84.2, 32.0], [84.3, 32.0], [84.4, 32.0], [84.5, 32.0], [84.6, 32.0], [84.7, 32.0], [84.8, 32.0], [84.9, 32.0], [85.0, 32.0], [85.1, 33.0], [85.2, 33.0], [85.3, 33.0], [85.4, 33.0], [85.5, 33.0], [85.6, 33.0], [85.7, 33.0], [85.8, 33.0], [85.9, 33.0], [86.0, 33.0], [86.1, 33.0], [86.2, 33.0], [86.3, 33.0], [86.4, 33.0], [86.5, 33.0], [86.6, 33.0], [86.7, 33.0], [86.8, 33.0], [86.9, 33.0], [87.0, 34.0], [87.1, 34.0], [87.2, 34.0], [87.3, 34.0], [87.4, 34.0], [87.5, 34.0], [87.6, 34.0], [87.7, 34.0], [87.8, 34.0], [87.9, 34.0], [88.0, 34.0], [88.1, 34.0], [88.2, 34.0], [88.3, 34.0], [88.4, 34.0], [88.5, 35.0], [88.6, 35.0], [88.7, 35.0], [88.8, 35.0], [88.9, 35.0], [89.0, 35.0], [89.1, 35.0], [89.2, 35.0], [89.3, 35.0], [89.4, 35.0], [89.5, 35.0], [89.6, 36.0], [89.7, 36.0], [89.8, 36.0], [89.9, 36.0], [90.0, 36.0], [90.1, 36.0], [90.2, 36.0], [90.3, 36.0], [90.4, 36.0], [90.5, 36.0], [90.6, 37.0], [90.7, 37.0], [90.8, 37.0], [90.9, 37.0], [91.0, 37.0], [91.1, 37.0], [91.2, 37.0], [91.3, 38.0], [91.4, 38.0], [91.5, 38.0], [91.6, 38.0], [91.7, 38.0], [91.8, 39.0], [91.9, 39.0], [92.0, 39.0], [92.1, 39.0], [92.2, 40.0], [92.3, 40.0], [92.4, 40.0], [92.5, 41.0], [92.6, 41.0], [92.7, 42.0], [92.8, 42.0], [92.9, 43.0], [93.0, 44.0], [93.1, 45.0], [93.2, 46.0], [93.3, 47.0], [93.4, 48.0], [93.5, 49.0], [93.6, 51.0], [93.7, 52.0], [93.8, 54.0], [93.9, 56.0], [94.0, 57.0], [94.1, 59.0], [94.2, 60.0], [94.3, 62.0], [94.4, 63.0], [94.5, 65.0], [94.6, 66.0], [94.7, 67.0], [94.8, 69.0], [94.9, 70.0], [95.0, 71.0], [95.1, 72.0], [95.2, 73.0], [95.3, 74.0], [95.4, 76.0], [95.5, 77.0], [95.6, 78.0], [95.7, 80.0], [95.8, 81.0], [95.9, 82.0], [96.0, 83.0], [96.1, 84.0], [96.2, 86.0], [96.3, 87.0], [96.4, 88.0], [96.5, 89.0], [96.6, 90.0], [96.7, 92.0], [96.8, 93.0], [96.9, 94.0], [97.0, 95.0], [97.1, 96.0], [97.2, 98.0], [97.3, 99.0], [97.4, 100.0], [97.5, 102.0], [97.6, 103.0], [97.7, 105.0], [97.8, 106.0], [97.9, 107.0], [98.0, 108.0], [98.1, 110.0], [98.2, 111.0], [98.3, 113.0], [98.4, 114.0], [98.5, 115.0], [98.6, 117.0], [98.7, 119.0], [98.8, 120.0], [98.9, 122.0], [99.0, 124.0], [99.1, 127.0], [99.2, 129.0], [99.3, 132.0], [99.4, 135.0], [99.5, 138.0], [99.6, 142.0], [99.7, 147.0], [99.8, 155.0], [99.9, 166.0], [100.0, 215.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 33.0, "minX": 0.0, "maxY": 872806.0, "series": [{"data": [[0.0, 872806.0], [100.0, 23844.0], [200.0, 33.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 896683.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 896683.0, "series": [{"data": [[0.0, 896683.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 267.5888420065632, "minX": 1.63340208E12, "maxY": 300.0, "series": [{"data": [[1.63340208E12, 267.5888420065632], [1.63340274E12, 300.0], [1.63340214E12, 300.0], [1.63340244E12, 300.0], [1.6334028E12, 300.0], [1.6334025E12, 300.0], [1.6334022E12, 300.0], [1.63340286E12, 300.0], [1.63340226E12, 300.0], [1.63340256E12, 300.0], [1.63340292E12, 300.0], [1.63340262E12, 300.0], [1.63340232E12, 300.0], [1.63340298E12, 299.8889023755853], [1.63340238E12, 300.0], [1.63340268E12, 300.0]], "isOverall": false, "label": "app1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63340298E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4.5, "minX": 119.0, "maxY": 190.0, "series": [{"data": [[119.0, 130.0], [121.0, 122.08333333333333], [120.0, 120.6], [122.0, 128.60000000000002], [123.0, 129.17647058823533], [124.0, 146.4], [125.0, 150.66666666666666], [126.0, 124.69999999999999], [127.0, 151.5], [128.0, 162.0], [129.0, 147.2857142857143], [135.0, 38.666666666666664], [131.0, 147.0], [133.0, 79.6], [134.0, 74.00000000000001], [132.0, 135.0], [138.0, 39.0], [139.0, 33.0], [141.0, 40.75], [137.0, 38.25], [142.0, 45.12500000000001], [136.0, 39.0], [143.0, 46.0], [144.0, 48.71428571428571], [145.0, 50.714285714285715], [148.0, 55.0], [149.0, 58.0], [150.0, 60.0], [151.0, 59.8], [147.0, 4.5], [152.0, 61.5], [159.0, 83.33333333333333], [160.0, 83.2], [161.0, 85.5], [162.0, 68.66666666666666], [163.0, 71.57142857142857], [164.0, 73.5], [165.0, 76.33333333333333], [166.0, 84.125], [167.0, 82.5], [169.0, 92.2], [171.0, 90.0], [172.0, 91.5], [173.0, 94.0], [174.0, 95.0], [175.0, 100.625], [176.0, 109.75], [177.0, 105.85714285714286], [179.0, 111.0], [180.0, 110.5], [181.0, 119.0], [182.0, 121.0], [183.0, 121.0], [184.0, 120.0], [185.0, 131.33333333333334], [186.0, 119.0], [191.0, 9.705882352941176], [193.0, 141.2], [194.0, 145.6], [195.0, 158.66666666666666], [196.0, 146.8], [197.0, 141.71428571428572], [198.0, 143.0], [199.0, 147.66666666666666], [200.0, 143.25], [201.0, 148.5], [202.0, 135.66666666666666], [203.0, 150.8888888888889], [204.0, 145.66666666666666], [205.0, 157.33333333333334], [206.0, 146.0], [207.0, 139.66666666666666], [208.0, 146.25], [209.0, 141.5], [210.0, 141.0], [211.0, 147.66666666666666], [212.0, 145.5], [213.0, 151.8], [214.0, 149.28571428571428], [215.0, 148.54545454545453], [216.0, 147.25], [217.0, 142.2], [218.0, 141.0], [223.0, 14.63157894736842], [226.0, 168.88888888888889], [227.0, 163.0], [228.0, 164.0], [229.0, 166.6], [230.0, 165.55555555555554], [231.0, 164.0], [232.0, 163.0], [234.0, 160.77777777777777], [235.0, 168.1], [236.0, 165.66666666666666], [237.0, 165.29999999999998], [238.0, 159.75], [239.0, 151.1818181818182], [240.0, 141.8], [241.0, 142.0], [242.0, 142.9], [243.0, 143.22222222222223], [244.0, 142.0], [246.0, 139.2], [247.0, 138.66666666666666], [248.0, 141.0], [252.0, 21.35714285714285], [263.0, 177.5], [259.0, 171.0], [268.0, 99.88888888888887], [269.0, 175.0], [270.0, 174.0], [271.0, 174.6], [260.0, 170.75], [261.0, 172.0], [262.0, 174.0], [264.0, 177.5], [265.0, 177.25], [266.0, 164.64285714285714], [267.0, 176.0], [273.0, 177.0], [272.0, 175.0], [274.0, 176.1], [275.0, 177.0], [276.0, 179.0], [277.0, 180.5], [279.0, 183.0], [278.0, 190.0], [281.0, 170.625], [284.0, 167.5], [280.0, 183.0], [287.0, 23.777777777777782], [286.0, 167.0], [285.0, 166.46153846153848], [283.0, 168.2], [282.0, 69.76470588235293], [291.0, 40.54545454545454], [294.0, 169.80180180180173], [292.0, 179.5], [293.0, 176.0], [298.0, 139.6], [297.0, 140.0], [300.0, 26.139455672193893], [299.0, 142.0], [288.0, 13.0], [295.0, 8.0]], "isOverall": false, "label": "AuthzUser", "isController": false}, {"data": [[299.915756181383, 26.23823357864494]], "isOverall": false, "label": "AuthzUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5847.3, "minX": 1.63340208E12, "maxY": 7926855.633333334, "series": [{"data": [[1.63340208E12, 281698.2], [1.63340274E12, 7882877.766666667], [1.63340214E12, 7902423.133333334], [1.63340244E12, 7915762.283333333], [1.6334028E12, 7890802.516666667], [1.6334025E12, 7926855.633333334], [1.6334022E12, 7905990.016666667], [1.63340286E12, 7793075.85], [1.63340226E12, 7906650.6], [1.63340256E12, 7909687.633333334], [1.63340292E12, 7893179.133333334], [1.63340262E12, 7908234.9], [1.63340232E12, 7871125.333333333], [1.63340298E12, 7616241.666666667], [1.63340238E12, 7909952.016666667], [1.63340268E12, 7906650.266666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63340208E12, 5847.3], [1.63340274E12, 166134.38333333333], [1.63340214E12, 165417.93333333332], [1.63340244E12, 166827.43333333332], [1.6334028E12, 166301.38333333333], [1.6334025E12, 167061.23333333334], [1.6334022E12, 165987.65], [1.63340286E12, 164241.71666666667], [1.63340226E12, 166635.38333333333], [1.63340256E12, 166699.4], [1.63340292E12, 166351.48333333334], [1.63340262E12, 166668.78333333333], [1.63340232E12, 165886.66666666666], [1.63340298E12, 160514.83333333334], [1.63340238E12, 166704.96666666667], [1.63340268E12, 166635.38333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63340298E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 25.127886975835654, "minX": 1.63340208E12, "maxY": 79.00375058602917, "series": [{"data": [[1.63340208E12, 79.00375058602917], [1.63340274E12, 25.79384811271769], [1.63340214E12, 27.30425990607812], [1.63340244E12, 26.510877907170787], [1.6334028E12, 26.960099750623396], [1.6334025E12, 25.907567225350668], [1.6334022E12, 26.60435320058814], [1.63340286E12, 26.406260062024494], [1.63340226E12, 26.669411548547743], [1.63340256E12, 25.246610565685], [1.63340292E12, 26.066575200361157], [1.63340262E12, 25.127886975835654], [1.63340232E12, 26.287399328858946], [1.63340298E12, 25.890376278828025], [1.63340238E12, 25.769626339867155], [1.63340268E12, 25.14003908533607]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63340298E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 25.033800370734948, "minX": 1.63340208E12, "maxY": 78.77027660571984, "series": [{"data": [[1.63340208E12, 78.77027660571984], [1.63340274E12, 25.71053292901533], [1.63340214E12, 27.189581696943378], [1.63340244E12, 26.42740832193261], [1.6334028E12, 26.863729936902462], [1.6334025E12, 25.82479757422286], [1.6334022E12, 26.491747962047164], [1.63340286E12, 26.318070124896213], [1.63340226E12, 26.569376471963846], [1.63340256E12, 25.16728444533518], [1.63340292E12, 25.96790871216539], [1.63340262E12, 25.033800370734948], [1.63340232E12, 26.207533557046805], [1.63340298E12, 25.815710074562062], [1.63340238E12, 25.687347647510748], [1.63340268E12, 25.057091316039926]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63340298E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007196115831454745, "minX": 1.63340208E12, "maxY": 3.2550398499765607, "series": [{"data": [[1.63340208E12, 3.2550398499765607], [1.63340274E12, 0.0073882960009381965], [1.63340214E12, 0.008071928739742981], [1.63340244E12, 0.007691280990356667], [1.6334028E12, 0.007866240439170565], [1.6334025E12, 0.00771383825930491], [1.6334022E12, 0.008268742482961333], [1.63340286E12, 0.007388703418122683], [1.63340226E12, 0.008184536237451754], [1.63340256E12, 0.007713884992987305], [1.63340292E12, 0.007796944802315697], [1.63340262E12, 0.007982498622267523], [1.63340232E12, 0.007416107382550341], [1.63340298E12, 0.007196115831454745], [1.63340238E12, 0.0076802350819781245], [1.63340268E12, 0.007533113965491192]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63340298E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.63340208E12, "maxY": 215.0, "series": [{"data": [[1.63340208E12, 198.0], [1.63340274E12, 147.0], [1.63340214E12, 215.0], [1.63340244E12, 162.0], [1.6334028E12, 174.0], [1.6334025E12, 163.0], [1.6334022E12, 173.0], [1.63340286E12, 189.0], [1.63340226E12, 193.0], [1.63340256E12, 184.0], [1.63340292E12, 174.0], [1.63340262E12, 144.0], [1.63340232E12, 176.0], [1.63340298E12, 176.0], [1.63340238E12, 188.0], [1.63340268E12, 148.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63340208E12, 182.0], [1.63340274E12, 107.0], [1.63340214E12, 135.0], [1.63340244E12, 120.0], [1.6334028E12, 105.0], [1.6334025E12, 125.0], [1.6334022E12, 109.0], [1.63340286E12, 125.0], [1.63340226E12, 111.0], [1.63340256E12, 118.0], [1.63340292E12, 129.0], [1.63340262E12, 106.9900000000016], [1.63340232E12, 127.0], [1.63340298E12, 122.0], [1.63340238E12, 130.0], [1.63340268E12, 115.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63340208E12, 198.0], [1.63340274E12, 131.0], [1.63340214E12, 173.0], [1.63340244E12, 150.99947273254293], [1.6334028E12, 127.99947273254293], [1.6334025E12, 141.0], [1.6334022E12, 128.99947273254293], [1.63340286E12, 141.0], [1.63340226E12, 140.0], [1.63340256E12, 140.99947273254293], [1.63340292E12, 152.0], [1.63340262E12, 136.99894546508585], [1.63340232E12, 173.99947273254293], [1.63340298E12, 151.0], [1.63340238E12, 187.99947273254293], [1.63340268E12, 147.99947273254293]], "isOverall": false, "label": "99.99th percentile", "isController": false}, {"data": [[1.63340208E12, 192.5980976867677], [1.63340274E12, 122.99930519103873], [1.63340214E12, 169.0], [1.63340244E12, 144.0], [1.6334028E12, 122.0], [1.6334025E12, 138.0], [1.6334022E12, 123.0], [1.63340286E12, 139.0], [1.63340226E12, 133.0], [1.63340256E12, 137.0], [1.63340292E12, 149.99930519103873], [1.63340262E12, 130.99930519103873], [1.63340232E12, 165.0], [1.63340298E12, 144.0], [1.63340238E12, 179.0], [1.63340268E12, 142.0]], "isOverall": false, "label": "99.9th percentile", "isController": false}, {"data": [[1.63340208E12, 5.0], [1.63340274E12, 4.0], [1.63340214E12, 4.0], [1.63340244E12, 4.0], [1.6334028E12, 4.0], [1.6334025E12, 4.0], [1.6334022E12, 4.0], [1.63340286E12, 4.0], [1.63340226E12, 4.0], [1.63340256E12, 5.0], [1.63340292E12, 5.0], [1.63340262E12, 4.0], [1.63340232E12, 4.0], [1.63340298E12, 4.0], [1.63340238E12, 4.0], [1.63340268E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63340208E12, 47.0], [1.63340274E12, 22.0], [1.63340214E12, 22.0], [1.63340244E12, 22.0], [1.6334028E12, 23.0], [1.6334025E12, 21.0], [1.6334022E12, 22.0], [1.63340286E12, 22.0], [1.63340226E12, 22.0], [1.63340256E12, 21.0], [1.63340292E12, 23.0], [1.63340262E12, 22.0], [1.63340232E12, 22.0], [1.63340298E12, 21.0], [1.63340238E12, 21.0], [1.63340268E12, 23.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63340298E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 15.0, "minX": 134.0, "maxY": 140.0, "series": [{"data": [[134.0, 15.0], [652.0, 38.0], [702.0, 22.0], [733.0, 21.0], [708.0, 21.0], [762.0, 21.0], [760.0, 21.0], [742.0, 59.0], [737.0, 20.0], [739.0, 19.0], [757.0, 22.0], [765.0, 21.0], [751.0, 22.0], [764.0, 22.0], [752.0, 22.0], [773.0, 21.0], [774.0, 21.0], [782.0, 22.0], [777.0, 21.0], [790.0, 22.0], [780.0, 21.0], [791.0, 22.0], [772.0, 22.0], [797.0, 20.0], [789.0, 22.0], [817.0, 20.0], [818.0, 23.0], [806.0, 22.0], [815.0, 21.0], [816.0, 22.0], [820.0, 19.0], [800.0, 22.0], [824.0, 20.0], [819.0, 31.0], [838.0, 20.0], [845.0, 20.0], [846.0, 20.0], [856.0, 21.0], [836.0, 20.0], [859.0, 22.0], [837.0, 49.0], [840.0, 22.0], [869.0, 20.0], [893.0, 23.0], [901.0, 29.0], [921.0, 25.0], [939.0, 24.0], [958.0, 25.0], [947.0, 27.0], [950.0, 22.0], [949.0, 30.0], [938.0, 22.0], [952.0, 27.5], [944.0, 22.0], [985.0, 21.0], [990.0, 22.0], [980.0, 21.0], [981.0, 22.0], [983.0, 21.0], [982.0, 21.0], [991.0, 22.0], [976.0, 21.0], [978.0, 23.0], [979.0, 23.0], [977.0, 23.0], [988.0, 22.0], [987.0, 21.0], [986.0, 23.0], [984.0, 21.0], [964.0, 28.0], [961.0, 27.0], [960.0, 30.0], [989.0, 23.0], [973.0, 22.0], [974.0, 23.0], [972.0, 24.0], [971.0, 24.0], [970.0, 21.0], [969.0, 24.0], [975.0, 21.0], [993.0, 21.0], [1001.0, 22.0], [1000.0, 22.0], [997.0, 22.0], [1012.0, 22.0], [1004.0, 22.0], [1006.0, 21.0], [1007.0, 22.0], [992.0, 22.0], [1005.0, 21.0], [1013.0, 22.0], [1015.0, 24.0], [1014.0, 26.0], [1002.0, 22.0], [994.0, 21.5], [1011.0, 22.0], [1010.0, 21.0], [1009.0, 22.0], [999.0, 21.0], [1016.0, 21.0], [998.0, 22.0], [1008.0, 21.0], [1020.0, 29.0], [1017.0, 21.0], [995.0, 22.0], [996.0, 22.0], [1003.0, 22.0], [1026.0, 25.0], [1024.0, 22.0], [1035.0, 22.0], [1033.0, 30.0], [1107.0, 140.0], [1145.0, 26.0], [1132.0, 27.0], [1130.0, 26.0], [1149.0, 23.0], [1190.0, 30.0], [1205.0, 27.0], [1199.0, 25.0], [1153.0, 25.0], [1157.0, 27.0], [1162.0, 28.0], [1154.0, 27.0], [1181.0, 28.0], [1177.0, 25.0], [1198.0, 26.0], [1186.0, 27.0], [1215.0, 27.0], [1184.0, 26.0], [1191.0, 26.0], [1192.0, 28.0], [1171.0, 28.0], [1173.0, 27.0], [1228.0, 27.0], [1235.0, 26.0], [1257.0, 28.0], [1222.0, 28.0], [1240.0, 27.0], [1241.0, 29.0], [1224.0, 23.0], [1259.0, 28.0], [1255.0, 29.0], [1252.0, 27.0], [1274.0, 25.0], [1239.0, 27.0], [1237.0, 28.0], [1283.0, 27.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1283.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 15.0, "minX": 134.0, "maxY": 140.0, "series": [{"data": [[134.0, 15.0], [652.0, 38.0], [702.0, 22.0], [733.0, 21.0], [708.0, 21.0], [762.0, 21.0], [760.0, 21.0], [742.0, 59.0], [737.0, 20.0], [739.0, 19.0], [757.0, 22.0], [765.0, 21.0], [751.0, 22.0], [764.0, 22.0], [752.0, 22.0], [773.0, 21.0], [774.0, 21.0], [782.0, 22.0], [777.0, 21.0], [790.0, 22.0], [780.0, 21.0], [791.0, 22.0], [772.0, 22.0], [797.0, 20.0], [789.0, 22.0], [817.0, 20.0], [818.0, 23.0], [806.0, 22.0], [815.0, 21.0], [816.0, 22.0], [820.0, 19.0], [800.0, 22.0], [824.0, 20.0], [819.0, 31.0], [838.0, 19.0], [845.0, 20.0], [846.0, 20.0], [856.0, 21.0], [836.0, 20.0], [859.0, 22.0], [837.0, 49.0], [840.0, 22.0], [869.0, 20.0], [893.0, 23.0], [901.0, 29.0], [921.0, 24.0], [939.0, 24.0], [958.0, 25.0], [947.0, 27.0], [950.0, 22.0], [949.0, 30.0], [938.0, 22.0], [952.0, 27.0], [944.0, 22.0], [985.0, 21.0], [990.0, 22.0], [980.0, 21.0], [981.0, 22.0], [983.0, 21.0], [982.0, 21.0], [991.0, 22.0], [976.0, 21.0], [978.0, 23.0], [979.0, 22.0], [977.0, 23.0], [988.0, 22.0], [987.0, 21.0], [986.0, 23.0], [984.0, 21.0], [964.0, 28.0], [961.0, 27.0], [960.0, 30.0], [989.0, 23.0], [973.0, 22.0], [974.0, 23.0], [972.0, 24.0], [971.0, 24.0], [970.0, 21.0], [969.0, 24.0], [975.0, 21.0], [993.0, 21.0], [1001.0, 22.0], [1000.0, 22.0], [997.0, 22.0], [1012.0, 22.0], [1004.0, 22.0], [1006.0, 21.0], [1007.0, 21.0], [992.0, 22.0], [1005.0, 21.0], [1013.0, 21.0], [1015.0, 24.0], [1014.0, 26.0], [1002.0, 22.0], [994.0, 21.0], [1011.0, 22.0], [1010.0, 21.0], [1009.0, 22.0], [999.0, 21.0], [1016.0, 21.0], [998.0, 22.0], [1008.0, 21.0], [1020.0, 29.0], [1017.0, 21.0], [995.0, 22.0], [996.0, 22.0], [1003.0, 22.0], [1026.0, 25.0], [1024.0, 22.0], [1035.0, 21.0], [1033.0, 29.0], [1107.0, 140.0], [1145.0, 26.0], [1132.0, 27.0], [1130.0, 26.0], [1149.0, 23.0], [1190.0, 30.0], [1205.0, 27.0], [1199.0, 25.0], [1153.0, 25.0], [1157.0, 27.0], [1162.0, 28.0], [1154.0, 26.0], [1181.0, 28.0], [1177.0, 25.0], [1198.0, 26.0], [1186.0, 27.0], [1215.0, 27.0], [1184.0, 26.0], [1191.0, 26.0], [1192.0, 28.0], [1171.0, 28.0], [1173.0, 27.0], [1228.0, 27.0], [1235.0, 26.0], [1257.0, 28.0], [1222.0, 27.0], [1240.0, 27.0], [1241.0, 29.0], [1224.0, 23.0], [1259.0, 28.0], [1255.0, 29.0], [1252.0, 27.0], [1274.0, 25.0], [1239.0, 27.0], [1237.0, 28.0], [1283.0, 27.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1283.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 36.03333333333333, "minX": 1.63340208E12, "maxY": 1000.9833333333333, "series": [{"data": [[1.63340208E12, 36.03333333333333], [1.63340274E12, 994.0166666666667], [1.63340214E12, 997.1666666666666], [1.63340244E12, 998.9666666666667], [1.6334028E12, 995.9166666666666], [1.6334025E12, 1000.9833333333333], [1.6334022E12, 998.1666666666666], [1.63340286E12, 984.1833333333333], [1.63340226E12, 997.5666666666667], [1.63340256E12, 997.5833333333334], [1.63340292E12, 996.1333333333333], [1.63340262E12, 998.0166666666667], [1.63340232E12, 992.7833333333333], [1.63340298E12, 960.35], [1.63340238E12, 998.2333333333333], [1.63340268E12, 998.6166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63340298E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 35.55, "minX": 1.63340208E12, "maxY": 1000.3666666666667, "series": [{"data": [[1.63340208E12, 35.55], [1.63340274E12, 994.8166666666667], [1.63340214E12, 997.2833333333333], [1.63340244E12, 998.9666666666667], [1.6334028E12, 995.8166666666667], [1.6334025E12, 1000.3666666666667], [1.6334022E12, 997.7333333333333], [1.63340286E12, 983.4833333333333], [1.63340226E12, 997.8166666666667], [1.63340256E12, 998.2], [1.63340292E12, 996.1166666666667], [1.63340262E12, 998.0166666666667], [1.63340232E12, 993.3333333333334], [1.63340298E12, 961.1666666666666], [1.63340238E12, 998.2333333333333], [1.63340268E12, 997.8166666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63340298E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 35.55, "minX": 1.63340208E12, "maxY": 1000.3666666666667, "series": [{"data": [[1.63340208E12, 35.55], [1.63340274E12, 994.8166666666667], [1.63340214E12, 997.2833333333333], [1.63340244E12, 998.9666666666667], [1.6334028E12, 995.8166666666667], [1.6334025E12, 1000.3666666666667], [1.6334022E12, 997.7333333333333], [1.63340286E12, 983.4833333333333], [1.63340226E12, 997.8166666666667], [1.63340256E12, 998.2], [1.63340292E12, 996.1166666666667], [1.63340262E12, 998.0166666666667], [1.63340232E12, 993.3333333333334], [1.63340298E12, 961.1666666666666], [1.63340238E12, 998.2333333333333], [1.63340268E12, 997.8166666666667]], "isOverall": false, "label": "AuthzUser-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63340298E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 35.55, "minX": 1.63340208E12, "maxY": 1000.3666666666667, "series": [{"data": [[1.63340208E12, 35.55], [1.63340274E12, 994.8166666666667], [1.63340214E12, 997.2833333333333], [1.63340244E12, 998.9666666666667], [1.6334028E12, 995.8166666666667], [1.6334025E12, 1000.3666666666667], [1.6334022E12, 997.7333333333333], [1.63340286E12, 983.4833333333333], [1.63340226E12, 997.8166666666667], [1.63340256E12, 998.2], [1.63340292E12, 996.1166666666667], [1.63340262E12, 998.0166666666667], [1.63340232E12, 993.3333333333334], [1.63340298E12, 961.1666666666666], [1.63340238E12, 998.2333333333333], [1.63340268E12, 997.8166666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63340298E12, "title": "Total Transactions Per Second"}},
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

