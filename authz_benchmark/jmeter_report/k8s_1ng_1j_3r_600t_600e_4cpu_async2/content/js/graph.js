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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 348.0, "series": [{"data": [[0.0, 4.0], [0.1, 6.0], [0.2, 6.0], [0.3, 6.0], [0.4, 7.0], [0.5, 7.0], [0.6, 7.0], [0.7, 7.0], [0.8, 7.0], [0.9, 7.0], [1.0, 7.0], [1.1, 8.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 8.0], [1.6, 8.0], [1.7, 8.0], [1.8, 8.0], [1.9, 8.0], [2.0, 8.0], [2.1, 8.0], [2.2, 8.0], [2.3, 8.0], [2.4, 9.0], [2.5, 9.0], [2.6, 9.0], [2.7, 9.0], [2.8, 9.0], [2.9, 9.0], [3.0, 9.0], [3.1, 9.0], [3.2, 9.0], [3.3, 9.0], [3.4, 9.0], [3.5, 9.0], [3.6, 9.0], [3.7, 9.0], [3.8, 9.0], [3.9, 9.0], [4.0, 9.0], [4.1, 9.0], [4.2, 9.0], [4.3, 9.0], [4.4, 9.0], [4.5, 9.0], [4.6, 9.0], [4.7, 9.0], [4.8, 9.0], [4.9, 9.0], [5.0, 9.0], [5.1, 9.0], [5.2, 9.0], [5.3, 9.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 10.0], [5.9, 10.0], [6.0, 10.0], [6.1, 10.0], [6.2, 10.0], [6.3, 10.0], [6.4, 10.0], [6.5, 10.0], [6.6, 10.0], [6.7, 10.0], [6.8, 10.0], [6.9, 10.0], [7.0, 10.0], [7.1, 10.0], [7.2, 10.0], [7.3, 10.0], [7.4, 10.0], [7.5, 10.0], [7.6, 10.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 10.0], [8.9, 11.0], [9.0, 11.0], [9.1, 11.0], [9.2, 11.0], [9.3, 11.0], [9.4, 11.0], [9.5, 11.0], [9.6, 11.0], [9.7, 11.0], [9.8, 11.0], [9.9, 11.0], [10.0, 11.0], [10.1, 11.0], [10.2, 11.0], [10.3, 11.0], [10.4, 11.0], [10.5, 11.0], [10.6, 11.0], [10.7, 11.0], [10.8, 11.0], [10.9, 11.0], [11.0, 11.0], [11.1, 11.0], [11.2, 11.0], [11.3, 11.0], [11.4, 11.0], [11.5, 11.0], [11.6, 11.0], [11.7, 11.0], [11.8, 11.0], [11.9, 11.0], [12.0, 12.0], [12.1, 12.0], [12.2, 12.0], [12.3, 12.0], [12.4, 12.0], [12.5, 12.0], [12.6, 12.0], [12.7, 12.0], [12.8, 12.0], [12.9, 12.0], [13.0, 12.0], [13.1, 12.0], [13.2, 12.0], [13.3, 12.0], [13.4, 12.0], [13.5, 12.0], [13.6, 12.0], [13.7, 12.0], [13.8, 12.0], [13.9, 12.0], [14.0, 12.0], [14.1, 12.0], [14.2, 12.0], [14.3, 12.0], [14.4, 12.0], [14.5, 12.0], [14.6, 12.0], [14.7, 12.0], [14.8, 13.0], [14.9, 13.0], [15.0, 13.0], [15.1, 13.0], [15.2, 13.0], [15.3, 13.0], [15.4, 13.0], [15.5, 13.0], [15.6, 13.0], [15.7, 13.0], [15.8, 13.0], [15.9, 13.0], [16.0, 13.0], [16.1, 13.0], [16.2, 13.0], [16.3, 13.0], [16.4, 13.0], [16.5, 13.0], [16.6, 13.0], [16.7, 13.0], [16.8, 13.0], [16.9, 13.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 14.0], [17.4, 14.0], [17.5, 14.0], [17.6, 14.0], [17.7, 14.0], [17.8, 14.0], [17.9, 14.0], [18.0, 14.0], [18.1, 14.0], [18.2, 14.0], [18.3, 14.0], [18.4, 14.0], [18.5, 14.0], [18.6, 14.0], [18.7, 14.0], [18.8, 14.0], [18.9, 14.0], [19.0, 14.0], [19.1, 14.0], [19.2, 14.0], [19.3, 14.0], [19.4, 14.0], [19.5, 14.0], [19.6, 14.0], [19.7, 14.0], [19.8, 14.0], [19.9, 15.0], [20.0, 15.0], [20.1, 15.0], [20.2, 15.0], [20.3, 15.0], [20.4, 15.0], [20.5, 15.0], [20.6, 15.0], [20.7, 15.0], [20.8, 15.0], [20.9, 15.0], [21.0, 15.0], [21.1, 15.0], [21.2, 15.0], [21.3, 15.0], [21.4, 15.0], [21.5, 15.0], [21.6, 15.0], [21.7, 15.0], [21.8, 15.0], [21.9, 15.0], [22.0, 15.0], [22.1, 15.0], [22.2, 15.0], [22.3, 15.0], [22.4, 15.0], [22.5, 15.0], [22.6, 16.0], [22.7, 16.0], [22.8, 16.0], [22.9, 16.0], [23.0, 16.0], [23.1, 16.0], [23.2, 16.0], [23.3, 16.0], [23.4, 16.0], [23.5, 16.0], [23.6, 16.0], [23.7, 16.0], [23.8, 16.0], [23.9, 16.0], [24.0, 16.0], [24.1, 16.0], [24.2, 16.0], [24.3, 16.0], [24.4, 16.0], [24.5, 16.0], [24.6, 16.0], [24.7, 16.0], [24.8, 16.0], [24.9, 16.0], [25.0, 16.0], [25.1, 16.0], [25.2, 16.0], [25.3, 16.0], [25.4, 16.0], [25.5, 17.0], [25.6, 17.0], [25.7, 17.0], [25.8, 17.0], [25.9, 17.0], [26.0, 17.0], [26.1, 17.0], [26.2, 17.0], [26.3, 17.0], [26.4, 17.0], [26.5, 17.0], [26.6, 17.0], [26.7, 17.0], [26.8, 17.0], [26.9, 17.0], [27.0, 17.0], [27.1, 17.0], [27.2, 17.0], [27.3, 17.0], [27.4, 17.0], [27.5, 17.0], [27.6, 17.0], [27.7, 17.0], [27.8, 17.0], [27.9, 17.0], [28.0, 17.0], [28.1, 17.0], [28.2, 17.0], [28.3, 17.0], [28.4, 17.0], [28.5, 18.0], [28.6, 18.0], [28.7, 18.0], [28.8, 18.0], [28.9, 18.0], [29.0, 18.0], [29.1, 18.0], [29.2, 18.0], [29.3, 18.0], [29.4, 18.0], [29.5, 18.0], [29.6, 18.0], [29.7, 18.0], [29.8, 18.0], [29.9, 18.0], [30.0, 18.0], [30.1, 18.0], [30.2, 18.0], [30.3, 18.0], [30.4, 18.0], [30.5, 18.0], [30.6, 18.0], [30.7, 18.0], [30.8, 18.0], [30.9, 18.0], [31.0, 18.0], [31.1, 18.0], [31.2, 18.0], [31.3, 18.0], [31.4, 18.0], [31.5, 18.0], [31.6, 19.0], [31.7, 19.0], [31.8, 19.0], [31.9, 19.0], [32.0, 19.0], [32.1, 19.0], [32.2, 19.0], [32.3, 19.0], [32.4, 19.0], [32.5, 19.0], [32.6, 19.0], [32.7, 19.0], [32.8, 19.0], [32.9, 19.0], [33.0, 19.0], [33.1, 19.0], [33.2, 19.0], [33.3, 19.0], [33.4, 19.0], [33.5, 19.0], [33.6, 19.0], [33.7, 19.0], [33.8, 19.0], [33.9, 19.0], [34.0, 19.0], [34.1, 19.0], [34.2, 19.0], [34.3, 19.0], [34.4, 19.0], [34.5, 19.0], [34.6, 19.0], [34.7, 19.0], [34.8, 19.0], [34.9, 20.0], [35.0, 20.0], [35.1, 20.0], [35.2, 20.0], [35.3, 20.0], [35.4, 20.0], [35.5, 20.0], [35.6, 20.0], [35.7, 20.0], [35.8, 20.0], [35.9, 20.0], [36.0, 20.0], [36.1, 20.0], [36.2, 20.0], [36.3, 20.0], [36.4, 20.0], [36.5, 20.0], [36.6, 20.0], [36.7, 20.0], [36.8, 20.0], [36.9, 20.0], [37.0, 20.0], [37.1, 20.0], [37.2, 20.0], [37.3, 20.0], [37.4, 20.0], [37.5, 20.0], [37.6, 20.0], [37.7, 20.0], [37.8, 20.0], [37.9, 20.0], [38.0, 20.0], [38.1, 20.0], [38.2, 21.0], [38.3, 21.0], [38.4, 21.0], [38.5, 21.0], [38.6, 21.0], [38.7, 21.0], [38.8, 21.0], [38.9, 21.0], [39.0, 21.0], [39.1, 21.0], [39.2, 21.0], [39.3, 21.0], [39.4, 21.0], [39.5, 21.0], [39.6, 21.0], [39.7, 21.0], [39.8, 21.0], [39.9, 21.0], [40.0, 21.0], [40.1, 21.0], [40.2, 21.0], [40.3, 21.0], [40.4, 21.0], [40.5, 21.0], [40.6, 21.0], [40.7, 21.0], [40.8, 21.0], [40.9, 21.0], [41.0, 21.0], [41.1, 21.0], [41.2, 21.0], [41.3, 21.0], [41.4, 21.0], [41.5, 21.0], [41.6, 22.0], [41.7, 22.0], [41.8, 22.0], [41.9, 22.0], [42.0, 22.0], [42.1, 22.0], [42.2, 22.0], [42.3, 22.0], [42.4, 22.0], [42.5, 22.0], [42.6, 22.0], [42.7, 22.0], [42.8, 22.0], [42.9, 22.0], [43.0, 22.0], [43.1, 22.0], [43.2, 22.0], [43.3, 22.0], [43.4, 22.0], [43.5, 22.0], [43.6, 22.0], [43.7, 22.0], [43.8, 22.0], [43.9, 22.0], [44.0, 22.0], [44.1, 22.0], [44.2, 22.0], [44.3, 22.0], [44.4, 22.0], [44.5, 22.0], [44.6, 22.0], [44.7, 22.0], [44.8, 22.0], [44.9, 23.0], [45.0, 23.0], [45.1, 23.0], [45.2, 23.0], [45.3, 23.0], [45.4, 23.0], [45.5, 23.0], [45.6, 23.0], [45.7, 23.0], [45.8, 23.0], [45.9, 23.0], [46.0, 23.0], [46.1, 23.0], [46.2, 23.0], [46.3, 23.0], [46.4, 23.0], [46.5, 23.0], [46.6, 23.0], [46.7, 23.0], [46.8, 23.0], [46.9, 23.0], [47.0, 23.0], [47.1, 23.0], [47.2, 23.0], [47.3, 23.0], [47.4, 23.0], [47.5, 23.0], [47.6, 23.0], [47.7, 23.0], [47.8, 23.0], [47.9, 23.0], [48.0, 23.0], [48.1, 23.0], [48.2, 23.0], [48.3, 24.0], [48.4, 24.0], [48.5, 24.0], [48.6, 24.0], [48.7, 24.0], [48.8, 24.0], [48.9, 24.0], [49.0, 24.0], [49.1, 24.0], [49.2, 24.0], [49.3, 24.0], [49.4, 24.0], [49.5, 24.0], [49.6, 24.0], [49.7, 24.0], [49.8, 24.0], [49.9, 24.0], [50.0, 24.0], [50.1, 24.0], [50.2, 24.0], [50.3, 24.0], [50.4, 24.0], [50.5, 24.0], [50.6, 24.0], [50.7, 24.0], [50.8, 24.0], [50.9, 24.0], [51.0, 24.0], [51.1, 24.0], [51.2, 24.0], [51.3, 24.0], [51.4, 24.0], [51.5, 24.0], [51.6, 24.0], [51.7, 25.0], [51.8, 25.0], [51.9, 25.0], [52.0, 25.0], [52.1, 25.0], [52.2, 25.0], [52.3, 25.0], [52.4, 25.0], [52.5, 25.0], [52.6, 25.0], [52.7, 25.0], [52.8, 25.0], [52.9, 25.0], [53.0, 25.0], [53.1, 25.0], [53.2, 25.0], [53.3, 25.0], [53.4, 25.0], [53.5, 25.0], [53.6, 25.0], [53.7, 25.0], [53.8, 25.0], [53.9, 25.0], [54.0, 25.0], [54.1, 25.0], [54.2, 25.0], [54.3, 25.0], [54.4, 25.0], [54.5, 25.0], [54.6, 25.0], [54.7, 25.0], [54.8, 25.0], [54.9, 25.0], [55.0, 25.0], [55.1, 26.0], [55.2, 26.0], [55.3, 26.0], [55.4, 26.0], [55.5, 26.0], [55.6, 26.0], [55.7, 26.0], [55.8, 26.0], [55.9, 26.0], [56.0, 26.0], [56.1, 26.0], [56.2, 26.0], [56.3, 26.0], [56.4, 26.0], [56.5, 26.0], [56.6, 26.0], [56.7, 26.0], [56.8, 26.0], [56.9, 26.0], [57.0, 26.0], [57.1, 26.0], [57.2, 26.0], [57.3, 26.0], [57.4, 26.0], [57.5, 26.0], [57.6, 26.0], [57.7, 26.0], [57.8, 26.0], [57.9, 26.0], [58.0, 26.0], [58.1, 26.0], [58.2, 26.0], [58.3, 26.0], [58.4, 26.0], [58.5, 27.0], [58.6, 27.0], [58.7, 27.0], [58.8, 27.0], [58.9, 27.0], [59.0, 27.0], [59.1, 27.0], [59.2, 27.0], [59.3, 27.0], [59.4, 27.0], [59.5, 27.0], [59.6, 27.0], [59.7, 27.0], [59.8, 27.0], [59.9, 27.0], [60.0, 27.0], [60.1, 27.0], [60.2, 27.0], [60.3, 27.0], [60.4, 27.0], [60.5, 27.0], [60.6, 27.0], [60.7, 27.0], [60.8, 27.0], [60.9, 27.0], [61.0, 27.0], [61.1, 27.0], [61.2, 27.0], [61.3, 27.0], [61.4, 27.0], [61.5, 27.0], [61.6, 27.0], [61.7, 27.0], [61.8, 27.0], [61.9, 28.0], [62.0, 28.0], [62.1, 28.0], [62.2, 28.0], [62.3, 28.0], [62.4, 28.0], [62.5, 28.0], [62.6, 28.0], [62.7, 28.0], [62.8, 28.0], [62.9, 28.0], [63.0, 28.0], [63.1, 28.0], [63.2, 28.0], [63.3, 28.0], [63.4, 28.0], [63.5, 28.0], [63.6, 28.0], [63.7, 28.0], [63.8, 28.0], [63.9, 28.0], [64.0, 28.0], [64.1, 28.0], [64.2, 28.0], [64.3, 28.0], [64.4, 28.0], [64.5, 28.0], [64.6, 28.0], [64.7, 28.0], [64.8, 28.0], [64.9, 28.0], [65.0, 28.0], [65.1, 29.0], [65.2, 29.0], [65.3, 29.0], [65.4, 29.0], [65.5, 29.0], [65.6, 29.0], [65.7, 29.0], [65.8, 29.0], [65.9, 29.0], [66.0, 29.0], [66.1, 29.0], [66.2, 29.0], [66.3, 29.0], [66.4, 29.0], [66.5, 29.0], [66.6, 29.0], [66.7, 29.0], [66.8, 29.0], [66.9, 29.0], [67.0, 29.0], [67.1, 29.0], [67.2, 29.0], [67.3, 29.0], [67.4, 29.0], [67.5, 29.0], [67.6, 29.0], [67.7, 29.0], [67.8, 29.0], [67.9, 29.0], [68.0, 29.0], [68.1, 30.0], [68.2, 30.0], [68.3, 30.0], [68.4, 30.0], [68.5, 30.0], [68.6, 30.0], [68.7, 30.0], [68.8, 30.0], [68.9, 30.0], [69.0, 30.0], [69.1, 30.0], [69.2, 30.0], [69.3, 30.0], [69.4, 30.0], [69.5, 30.0], [69.6, 30.0], [69.7, 30.0], [69.8, 30.0], [69.9, 30.0], [70.0, 30.0], [70.1, 30.0], [70.2, 30.0], [70.3, 30.0], [70.4, 30.0], [70.5, 30.0], [70.6, 30.0], [70.7, 30.0], [70.8, 30.0], [70.9, 31.0], [71.0, 31.0], [71.1, 31.0], [71.2, 31.0], [71.3, 31.0], [71.4, 31.0], [71.5, 31.0], [71.6, 31.0], [71.7, 31.0], [71.8, 31.0], [71.9, 31.0], [72.0, 31.0], [72.1, 31.0], [72.2, 31.0], [72.3, 31.0], [72.4, 31.0], [72.5, 31.0], [72.6, 31.0], [72.7, 31.0], [72.8, 31.0], [72.9, 31.0], [73.0, 31.0], [73.1, 31.0], [73.2, 31.0], [73.3, 31.0], [73.4, 31.0], [73.5, 32.0], [73.6, 32.0], [73.7, 32.0], [73.8, 32.0], [73.9, 32.0], [74.0, 32.0], [74.1, 32.0], [74.2, 32.0], [74.3, 32.0], [74.4, 32.0], [74.5, 32.0], [74.6, 32.0], [74.7, 32.0], [74.8, 32.0], [74.9, 32.0], [75.0, 32.0], [75.1, 32.0], [75.2, 32.0], [75.3, 32.0], [75.4, 32.0], [75.5, 32.0], [75.6, 32.0], [75.7, 32.0], [75.8, 32.0], [75.9, 33.0], [76.0, 33.0], [76.1, 33.0], [76.2, 33.0], [76.3, 33.0], [76.4, 33.0], [76.5, 33.0], [76.6, 33.0], [76.7, 33.0], [76.8, 33.0], [76.9, 33.0], [77.0, 33.0], [77.1, 33.0], [77.2, 33.0], [77.3, 33.0], [77.4, 33.0], [77.5, 33.0], [77.6, 33.0], [77.7, 33.0], [77.8, 33.0], [77.9, 34.0], [78.0, 34.0], [78.1, 34.0], [78.2, 34.0], [78.3, 34.0], [78.4, 34.0], [78.5, 34.0], [78.6, 34.0], [78.7, 34.0], [78.8, 34.0], [78.9, 34.0], [79.0, 34.0], [79.1, 34.0], [79.2, 34.0], [79.3, 34.0], [79.4, 34.0], [79.5, 35.0], [79.6, 35.0], [79.7, 35.0], [79.8, 35.0], [79.9, 35.0], [80.0, 35.0], [80.1, 35.0], [80.2, 35.0], [80.3, 35.0], [80.4, 35.0], [80.5, 35.0], [80.6, 35.0], [80.7, 35.0], [80.8, 35.0], [80.9, 36.0], [81.0, 36.0], [81.1, 36.0], [81.2, 36.0], [81.3, 36.0], [81.4, 36.0], [81.5, 36.0], [81.6, 36.0], [81.7, 36.0], [81.8, 36.0], [81.9, 36.0], [82.0, 37.0], [82.1, 37.0], [82.2, 37.0], [82.3, 37.0], [82.4, 37.0], [82.5, 37.0], [82.6, 37.0], [82.7, 37.0], [82.8, 37.0], [82.9, 38.0], [83.0, 38.0], [83.1, 38.0], [83.2, 38.0], [83.3, 38.0], [83.4, 38.0], [83.5, 38.0], [83.6, 39.0], [83.7, 39.0], [83.8, 39.0], [83.9, 39.0], [84.0, 39.0], [84.1, 39.0], [84.2, 40.0], [84.3, 40.0], [84.4, 40.0], [84.5, 41.0], [84.6, 41.0], [84.7, 41.0], [84.8, 42.0], [84.9, 42.0], [85.0, 43.0], [85.1, 44.0], [85.2, 45.0], [85.3, 46.0], [85.4, 47.0], [85.5, 49.0], [85.6, 50.0], [85.7, 52.0], [85.8, 54.0], [85.9, 56.0], [86.0, 58.0], [86.1, 60.0], [86.2, 61.0], [86.3, 63.0], [86.4, 65.0], [86.5, 68.0], [86.6, 70.0], [86.7, 72.0], [86.8, 74.0], [86.9, 76.0], [87.0, 78.0], [87.1, 80.0], [87.2, 81.0], [87.3, 83.0], [87.4, 85.0], [87.5, 87.0], [87.6, 88.0], [87.7, 90.0], [87.8, 92.0], [87.9, 94.0], [88.0, 97.0], [88.1, 99.0], [88.2, 101.0], [88.3, 103.0], [88.4, 105.0], [88.5, 107.0], [88.6, 109.0], [88.7, 110.0], [88.8, 112.0], [88.9, 113.0], [89.0, 115.0], [89.1, 116.0], [89.2, 117.0], [89.3, 119.0], [89.4, 120.0], [89.5, 121.0], [89.6, 123.0], [89.7, 124.0], [89.8, 125.0], [89.9, 127.0], [90.0, 128.0], [90.1, 129.0], [90.2, 131.0], [90.3, 132.0], [90.4, 133.0], [90.5, 134.0], [90.6, 136.0], [90.7, 137.0], [90.8, 138.0], [90.9, 139.0], [91.0, 141.0], [91.1, 142.0], [91.2, 143.0], [91.3, 144.0], [91.4, 145.0], [91.5, 146.0], [91.6, 147.0], [91.7, 149.0], [91.8, 150.0], [91.9, 151.0], [92.0, 152.0], [92.1, 153.0], [92.2, 154.0], [92.3, 155.0], [92.4, 156.0], [92.5, 157.0], [92.6, 158.0], [92.7, 159.0], [92.8, 160.0], [92.9, 161.0], [93.0, 162.0], [93.1, 163.0], [93.2, 164.0], [93.3, 165.0], [93.4, 167.0], [93.5, 168.0], [93.6, 169.0], [93.7, 170.0], [93.8, 171.0], [93.9, 172.0], [94.0, 173.0], [94.1, 174.0], [94.2, 175.0], [94.3, 176.0], [94.4, 177.0], [94.5, 178.0], [94.6, 180.0], [94.7, 181.0], [94.8, 182.0], [94.9, 183.0], [95.0, 184.0], [95.1, 185.0], [95.2, 186.0], [95.3, 187.0], [95.4, 188.0], [95.5, 190.0], [95.6, 191.0], [95.7, 192.0], [95.8, 193.0], [95.9, 194.0], [96.0, 195.0], [96.1, 196.0], [96.2, 197.0], [96.3, 199.0], [96.4, 200.0], [96.5, 201.0], [96.6, 202.0], [96.7, 204.0], [96.8, 205.0], [96.9, 206.0], [97.0, 207.0], [97.1, 209.0], [97.2, 210.0], [97.3, 212.0], [97.4, 213.0], [97.5, 215.0], [97.6, 216.0], [97.7, 218.0], [97.8, 219.0], [97.9, 221.0], [98.0, 222.0], [98.1, 224.0], [98.2, 226.0], [98.3, 227.0], [98.4, 229.0], [98.5, 231.0], [98.6, 233.0], [98.7, 235.0], [98.8, 237.0], [98.9, 239.0], [99.0, 242.0], [99.1, 245.0], [99.2, 248.0], [99.3, 251.0], [99.4, 255.0], [99.5, 259.0], [99.6, 264.0], [99.7, 270.0], [99.8, 278.0], [99.9, 292.0], [100.0, 348.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 510.0, "minX": 0.0, "maxY": 790878.0, "series": [{"data": [[0.0, 790878.0], [300.0, 510.0], [100.0, 74075.0], [200.0, 32045.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 897508.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 897508.0, "series": [{"data": [[0.0, 897508.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 593.1743435511808, "minX": 1.63342548E12, "maxY": 600.0, "series": [{"data": [[1.63342602E12, 600.0], [1.63342632E12, 600.0], [1.63342638E12, 598.1868596237332], [1.63342572E12, 600.0], [1.63342626E12, 600.0], [1.6334256E12, 600.0], [1.63342566E12, 600.0], [1.63342596E12, 600.0], [1.63342584E12, 600.0], [1.6334259E12, 600.0], [1.63342554E12, 600.0], [1.6334262E12, 600.0], [1.63342548E12, 593.1743435511808], [1.63342578E12, 600.0], [1.63342608E12, 600.0], [1.63342614E12, 600.0]], "isOverall": false, "label": "app1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63342638E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 141.0, "maxY": 256.5, "series": [{"data": [[141.0, 5.0], [190.0, 109.66666666666667], [191.0, 118.33333333333333], [186.0, 6.857142857142857], [198.0, 129.25], [200.0, 126.0], [201.0, 119.0], [207.0, 141.0], [212.0, 170.66666666666666], [215.0, 160.66666666666669], [216.0, 148.5], [217.0, 158.71428571428572], [226.0, 5.8], [240.0, 200.33333333333334], [241.0, 201.66666666666666], [242.0, 216.7142857142857], [244.0, 203.33333333333334], [245.0, 224.5], [246.0, 220.4], [247.0, 213.5], [248.0, 227.0], [249.0, 231.66666666666666], [250.0, 235.0], [251.0, 220.28571428571428], [252.0, 224.0], [253.0, 242.0], [254.0, 212.0], [255.0, 205.0], [257.0, 230.2], [256.0, 224.0], [258.0, 215.0], [259.0, 217.57142857142856], [260.0, 214.3846153846154], [261.0, 226.25], [262.0, 241.66666666666666], [264.0, 234.66666666666666], [270.0, 211.16666666666669], [268.0, 223.33333333333334], [269.0, 101.4], [265.0, 256.5], [267.0, 218.0], [273.0, 150.0], [274.0, 156.0], [286.0, 160.33333333333334], [287.0, 150.99999999999997], [277.0, 166.33333333333331], [278.0, 161.2857142857143], [279.0, 158.5], [280.0, 160.0], [281.0, 155.0], [282.0, 157.0], [283.0, 155.0], [289.0, 148.5], [288.0, 151.5], [290.0, 146.33333333333334], [291.0, 143.66666666666666], [292.0, 129.0], [293.0, 156.0], [294.0, 114.0], [295.0, 123.0], [296.0, 135.5], [302.0, 123.0], [303.0, 161.0], [300.0, 142.0], [301.0, 136.8], [297.0, 143.0], [298.0, 151.66666666666666], [305.0, 139.5], [304.0, 156.66666666666666], [306.0, 145.0], [307.0, 137.0], [308.0, 128.33333333333334], [309.0, 132.33333333333334], [310.0, 129.0], [312.0, 132.33333333333334], [318.0, 137.0], [319.0, 129.0], [316.0, 136.33333333333334], [317.0, 136.33333333333331], [313.0, 135.0], [314.0, 92.41666666666666], [322.0, 134.44444444444446], [320.0, 129.0], [323.0, 134.20000000000002], [332.0, 134.0], [321.0, 131.33333333333334], [326.0, 137.96296296296296], [324.0, 135.66666666666666], [327.0, 139.23076923076923], [333.0, 134.5], [335.0, 134.27272727272728], [328.0, 144.33333333333334], [330.0, 143.0], [329.0, 142.0], [334.0, 150.66666666666666], [336.0, 130.0], [340.0, 125.75], [339.0, 125.22222222222223], [342.0, 126.71428571428572], [341.0, 126.66666666666666], [343.0, 120.91666666666666], [345.0, 119.0], [344.0, 115.5], [346.0, 122.5], [351.0, 107.28571428571428], [348.0, 120.5], [350.0, 116.35], [349.0, 118.77777777777777], [352.0, 106.5], [360.0, 101.88888888888889], [356.0, 108.33333333333333], [357.0, 107.66666666666667], [359.0, 109.5], [353.0, 107.42857142857143], [361.0, 99.46153846153847], [363.0, 100.0], [362.0, 98.0], [358.0, 110.0], [355.0, 107.4], [367.0, 89.45454545454545], [366.0, 99.0], [365.0, 100.5], [364.0, 100.14285714285714], [354.0, 17.11111111111111], [371.0, 74.0], [368.0, 77.11111111111111], [372.0, 76.66666666666669], [369.0, 76.0], [376.0, 66.0], [379.0, 62.142857142857146], [377.0, 61.714285714285715], [378.0, 63.5], [383.0, 63.75], [382.0, 61.857142857142854], [373.0, 74.22222222222223], [375.0, 71.0], [381.0, 62.333333333333336], [380.0, 61.888888888888886], [384.0, 65.5], [393.0, 38.4], [395.0, 39.285714285714285], [389.0, 66.5], [388.0, 68.2], [386.0, 67.66666666666667], [385.0, 69.0], [391.0, 50.37499999999999], [390.0, 62.333333333333336], [394.0, 20.08695652173913], [387.0, 68.5], [396.0, 39.0], [392.0, 38.0], [398.0, 42.166666666666664], [397.0, 40.57142857142857], [402.0, 44.6], [400.0, 42.4], [403.0, 38.75], [401.0, 42.5], [404.0, 29.5], [407.0, 35.5], [414.0, 31.25], [415.0, 32.333333333333336], [413.0, 30.833333333333336], [412.0, 28.800000000000004], [410.0, 26.666666666666668], [409.0, 29.0], [418.0, 33.18181818181818], [416.0, 34.333333333333336], [417.0, 34.0], [421.0, 12.5], [423.0, 5.5], [422.0, 9.0], [429.0, 12.5], [420.0, 19.75], [419.0, 30.25], [427.0, 9.0], [425.0, 6.0], [424.0, 8.0], [431.0, 15.25], [430.0, 15.333333333333334], [428.0, 7.842105263157895], [433.0, 18.666666666666668], [434.0, 19.75], [437.0, 27.25], [438.0, 22.583333333333332], [435.0, 23.0], [432.0, 17.0], [436.0, 25.0], [441.0, 8.0], [440.0, 12.0], [447.0, 7.0], [446.0, 6.0], [449.0, 10.75], [451.0, 13.0], [452.0, 13.5], [454.0, 17.6], [453.0, 14.8], [457.0, 20.333333333333332], [458.0, 21.5], [459.0, 22.75], [456.0, 18.0], [463.0, 9.5], [460.0, 25.0], [461.0, 11.999999999999998], [462.0, 14.166666666666668], [450.0, 12.0], [455.0, 18.75], [448.0, 10.0], [479.0, 18.0], [464.0, 6.5], [474.0, 9.0], [465.0, 6.0], [466.0, 4.0], [472.0, 5.0], [473.0, 8.0], [467.0, 4.333333333333333], [478.0, 18.0], [469.0, 5.0], [471.0, 5.0], [483.0, 27.1], [481.0, 23.571428571428573], [480.0, 21.0], [482.0, 25.125], [484.0, 26.391304347826086], [485.0, 15.322580645161288], [491.0, 4.5], [490.0, 5.5], [488.0, 9.0], [495.0, 9.0], [494.0, 5.0], [498.0, 9.0], [502.0, 16.4], [500.0, 13.666666666666666], [499.0, 11.0], [503.0, 21.87234042553192], [506.0, 8.75], [507.0, 5.0], [508.0, 4.0], [519.0, 18.4], [512.0, 4.0], [520.0, 24.0], [521.0, 24.333333333333332], [516.0, 9.0], [522.0, 25.333333333333332], [528.0, 24.5], [536.0, 38.33333333333333], [537.0, 33.714285714285715], [538.0, 36.0], [539.0, 37.18181818181818], [540.0, 28.0], [542.0, 18.0], [543.0, 9.0], [541.0, 30.333333333333332], [513.0, 6.0], [532.0, 28.333333333333332], [529.0, 28.0], [534.0, 19.157894736842106], [535.0, 91.0], [533.0, 28.0], [548.0, 16.25], [559.0, 36.909090909090914], [545.0, 64.25], [544.0, 23.6], [546.0, 34.5], [547.0, 114.66666666666667], [550.0, 24.875], [549.0, 8.0], [551.0, 26.0], [560.0, 43.1], [573.0, 14.5], [570.0, 9.5], [568.0, 8.0], [575.0, 18.666666666666668], [561.0, 28.77777777777778], [562.0, 18.4], [564.0, 6.25], [565.0, 5.333333333333333], [563.0, 9.5], [556.0, 31.083333333333332], [555.0, 13.285714285714286], [552.0, 27.0], [557.0, 32.71428571428571], [558.0, 33.75], [578.0, 24.916666666666664], [577.0, 20.5], [579.0, 37.125], [582.0, 12.333333333333334], [583.0, 5.0], [593.0, 17.4], [595.0, 8.75], [596.0, 14.0], [597.0, 14.5], [598.0, 18.91836734693877], [599.0, 16.0], [592.0, 5.0], [600.0, 41.620449853914955], [581.0, 20.636363636363633], [580.0, 27.0], [576.0, 20.0], [585.0, 16.382978723404257], [584.0, 11.5], [586.0, 4.5], [587.0, 4.5], [588.0, 4.5], [589.0, 5.0]], "isOverall": false, "label": "AuthzUser", "isController": false}, {"data": [[599.6363731577136, 41.68161063745279]], "isOverall": false, "label": "AuthzUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 600.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 48082.083333333336, "minX": 1.63342548E12, "maxY": 7987231.683333334, "series": [{"data": [[1.63342602E12, 7891749.816666666], [1.63342632E12, 7857013.033333333], [1.63342638E12, 2281426.3333333335], [1.63342572E12, 7910630.85], [1.63342626E12, 7889237.216666667], [1.6334256E12, 7987231.683333334], [1.63342566E12, 7880652.216666667], [1.63342596E12, 7901255.533333333], [1.63342584E12, 7902313.483333333], [1.6334259E12, 7910763.416666667], [1.63342554E12, 7829137.05], [1.6334262E12, 7882502.066666666], [1.63342548E12, 5708581.666666667], [1.63342578E12, 7892407.066666666], [1.63342608E12, 7900992.316666666], [1.63342614E12, 7904559.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63342602E12, 166320.86666666667], [1.63342632E12, 165588.85], [1.63342638E12, 48082.083333333336], [1.63342572E12, 166718.88333333333], [1.63342626E12, 166267.98333333334], [1.6334256E12, 168333.21666666667], [1.63342566E12, 166087.06666666668], [1.63342596E12, 166521.26666666666], [1.63342584E12, 166543.53333333333], [1.6334259E12, 166721.66666666666], [1.63342554E12, 164055.33333333334], [1.6334262E12, 166126.03333333333], [1.63342548E12, 119404.06666666667], [1.63342578E12, 166334.78333333333], [1.63342608E12, 166515.7], [1.63342614E12, 166590.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63342638E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 38.18674384949349, "minX": 1.63342548E12, "maxY": 47.911001653115534, "series": [{"data": [[1.63342602E12, 40.45434768056773], [1.63342632E12, 42.86374867631439], [1.63342638E12, 38.18674384949349], [1.63342572E12, 40.86166713968519], [1.63342626E12, 39.174029495956724], [1.6334256E12, 42.91005142280765], [1.63342566E12, 43.32946775707183], [1.63342596E12, 44.66595908270373], [1.63342584E12, 38.849989972591835], [1.6334259E12, 41.71457429048402], [1.63342554E12, 47.911001653115534], [1.6334262E12, 39.32744697248924], [1.63342548E12, 43.027507229611984], [1.63342578E12, 42.051053362560474], [1.63342608E12, 39.65550095276285], [1.63342614E12, 39.8563814679301]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63342638E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 38.0936613603472, "minX": 1.63342548E12, "maxY": 47.806163759657416, "series": [{"data": [[1.63342602E12, 40.34975567307028], [1.63342632E12, 42.77992368850147], [1.63342638E12, 38.0936613603472], [1.63342572E12, 40.74482044775412], [1.63342626E12, 39.093158344075306], [1.6334256E12, 42.80743729228314], [1.63342566E12, 43.22551615498059], [1.63342596E12, 44.542923046065525], [1.63342584E12, 38.744835884751716], [1.6334259E12, 41.60490818030139], [1.63342554E12, 47.806163759657416], [1.6334262E12, 39.22045370773709], [1.63342548E12, 42.92728744939296], [1.63342578E12, 41.938756044912004], [1.63342608E12, 39.54439541336562], [1.63342614E12, 39.74587739962932]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63342638E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00750484722872226, "minX": 1.63342548E12, "maxY": 0.2936032388663976, "series": [{"data": [[1.63342602E12, 0.0075808287033938115], [1.63342632E12, 0.008959037197653496], [1.63342638E12, 0.03316931982633854], [1.63342572E12, 0.008781448772099616], [1.63342626E12, 0.008989403552237213], [1.6334256E12, 0.008333471122207635], [1.63342566E12, 0.009116503552755013], [1.63342596E12, 0.00750484722872226], [1.63342584E12, 0.008590146400160273], [1.6334259E12, 0.007729549248747881], [1.63342554E12, 0.00951384906042313], [1.6334262E12, 0.008695506483932514], [1.63342548E12, 0.2936032388663976], [1.63342578E12, 0.008216060641555596], [1.63342608E12, 0.008508006552335063], [1.63342614E12, 0.008520876146559041]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63342638E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.63342548E12, "maxY": 348.0, "series": [{"data": [[1.63342602E12, 287.0], [1.63342632E12, 279.0], [1.63342638E12, 313.0], [1.63342572E12, 282.0], [1.63342626E12, 296.0], [1.6334256E12, 310.0], [1.63342566E12, 289.0], [1.63342596E12, 298.0], [1.63342584E12, 253.0], [1.6334259E12, 300.0], [1.63342554E12, 328.0], [1.6334262E12, 272.0], [1.63342548E12, 293.0], [1.63342578E12, 270.0], [1.63342608E12, 265.0], [1.63342614E12, 348.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63342602E12, 249.0], [1.63342632E12, 239.0], [1.63342638E12, 277.0], [1.63342572E12, 255.0], [1.63342626E12, 232.0], [1.6334256E12, 230.0], [1.63342566E12, 228.0], [1.63342596E12, 262.0], [1.63342584E12, 220.0], [1.6334259E12, 255.0], [1.63342554E12, 287.0], [1.6334262E12, 219.0], [1.63342548E12, 219.0], [1.63342578E12, 251.0], [1.63342608E12, 217.0], [1.63342614E12, 270.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63342602E12, 285.0], [1.63342632E12, 268.9994727325429], [1.63342638E12, 312.2720309448232], [1.63342572E12, 281.0], [1.63342626E12, 255.0], [1.6334256E12, 262.9994727325429], [1.63342566E12, 274.0], [1.63342596E12, 297.9994727325429], [1.63342584E12, 250.99894546508585], [1.6334259E12, 271.0], [1.63342554E12, 327.9994727325429], [1.6334262E12, 241.0], [1.63342548E12, 256.0], [1.63342578E12, 270.0], [1.63342608E12, 246.99947273254293], [1.63342614E12, 313.9994727325429]], "isOverall": false, "label": "99.99th percentile", "isController": false}, {"data": [[1.63342602E12, 279.0], [1.63342632E12, 265.0], [1.63342638E12, 304.0], [1.63342572E12, 275.99930519103873], [1.63342626E12, 250.0], [1.6334256E12, 258.0], [1.63342566E12, 266.99930519103873], [1.63342596E12, 293.99930519103873], [1.63342584E12, 240.0], [1.6334259E12, 269.0], [1.63342554E12, 322.99930519103873], [1.6334262E12, 236.99930519103873], [1.63342548E12, 251.0], [1.63342578E12, 266.99930519103873], [1.63342608E12, 239.0], [1.63342614E12, 307.0]], "isOverall": false, "label": "99.9th percentile", "isController": false}, {"data": [[1.63342602E12, 4.0], [1.63342632E12, 4.0], [1.63342638E12, 4.0], [1.63342572E12, 4.0], [1.63342626E12, 4.0], [1.6334256E12, 4.0], [1.63342566E12, 4.0], [1.63342596E12, 4.0], [1.63342584E12, 4.0], [1.6334259E12, 4.0], [1.63342554E12, 4.0], [1.6334262E12, 4.0], [1.63342548E12, 4.0], [1.63342578E12, 4.0], [1.63342608E12, 4.0], [1.63342614E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63342602E12, 23.0], [1.63342632E12, 24.0], [1.63342638E12, 23.0], [1.63342572E12, 24.0], [1.63342626E12, 23.0], [1.6334256E12, 24.0], [1.63342566E12, 24.0], [1.63342596E12, 24.0], [1.63342584E12, 24.0], [1.6334259E12, 24.0], [1.63342554E12, 24.0], [1.6334262E12, 23.0], [1.63342548E12, 25.0], [1.63342578E12, 24.0], [1.63342608E12, 24.0], [1.63342614E12, 24.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63342638E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 12.0, "minX": 299.0, "maxY": 233.5, "series": [{"data": [[299.0, 12.0], [360.0, 21.0], [398.0, 23.0], [414.0, 21.0], [416.0, 22.5], [418.0, 24.0], [441.0, 23.0], [454.0, 21.0], [462.0, 25.5], [465.0, 22.0], [473.0, 21.0], [472.0, 24.0], [489.0, 26.0], [509.0, 27.0], [530.0, 20.0], [534.0, 26.0], [535.0, 33.0], [525.0, 25.0], [533.0, 21.0], [539.0, 21.0], [541.0, 22.0], [540.0, 22.0], [536.0, 20.0], [532.0, 25.0], [531.0, 22.0], [569.0, 32.0], [549.0, 30.0], [575.0, 22.0], [555.0, 23.0], [565.0, 22.0], [574.0, 20.0], [550.0, 22.0], [551.0, 21.0], [563.0, 22.0], [559.0, 24.0], [547.0, 21.0], [546.0, 19.0], [558.0, 22.0], [593.0, 25.0], [582.0, 30.0], [579.0, 23.0], [604.0, 24.0], [586.0, 19.0], [583.0, 21.0], [581.0, 21.0], [576.0, 23.0], [613.0, 21.0], [615.0, 23.0], [652.0, 111.0], [664.0, 32.0], [642.0, 189.0], [700.0, 233.5], [690.0, 157.5], [731.0, 232.0], [713.0, 192.0], [733.0, 21.0], [718.0, 21.0], [715.0, 23.0], [720.0, 22.0], [714.0, 30.0], [727.0, 22.0], [735.0, 20.0], [722.0, 24.0], [724.0, 22.0], [737.0, 20.0], [749.0, 20.0], [746.0, 30.0], [764.0, 144.0], [736.0, 21.0], [759.0, 22.0], [745.0, 21.0], [750.0, 22.0], [768.0, 107.0], [788.0, 23.0], [774.0, 158.0], [781.0, 163.0], [772.0, 22.5], [770.0, 21.0], [826.0, 25.0], [807.0, 21.0], [817.0, 23.0], [820.0, 142.5], [821.0, 165.0], [811.0, 186.0], [803.0, 23.0], [805.0, 22.0], [818.0, 20.0], [810.0, 21.0], [863.0, 21.0], [857.0, 24.0], [841.0, 159.0], [856.0, 170.0], [883.0, 149.0], [890.0, 137.5], [921.0, 142.0], [923.0, 21.0], [907.0, 153.0], [902.0, 30.0], [926.0, 151.0], [908.0, 157.0], [904.0, 20.0], [920.0, 22.0], [906.0, 24.0], [943.0, 22.0], [956.0, 22.0], [932.0, 130.0], [946.0, 173.0], [947.0, 137.0], [951.0, 22.0], [952.0, 21.0], [990.0, 23.0], [986.0, 23.0], [977.0, 24.0], [985.0, 23.0], [984.0, 22.0], [978.0, 27.0], [983.0, 22.0], [982.0, 23.0], [981.0, 24.0], [979.0, 23.0], [980.0, 21.0], [989.0, 22.0], [987.0, 21.0], [988.0, 22.0], [991.0, 21.0], [976.0, 21.0], [970.0, 24.0], [971.0, 22.0], [974.0, 88.0], [975.0, 22.0], [960.0, 22.0], [972.0, 26.0], [962.0, 23.0], [964.0, 25.0], [967.0, 21.0], [999.0, 22.0], [992.0, 22.0], [1013.0, 22.0], [1014.0, 21.0], [1015.0, 21.0], [1012.0, 22.0], [1001.0, 23.0], [1003.0, 22.0], [1002.0, 22.0], [1004.0, 24.0], [1000.0, 23.0], [997.0, 21.0], [1007.0, 22.0], [1006.0, 23.0], [998.0, 23.0], [1008.0, 22.0], [1023.0, 133.0], [1017.0, 22.0], [1019.0, 22.0], [1016.0, 20.0], [1021.0, 142.0], [1010.0, 21.0], [1009.0, 22.0], [1005.0, 23.0], [993.0, 22.0], [1011.0, 22.0], [996.0, 22.0], [995.0, 22.0], [994.0, 23.0], [1080.0, 24.0], [1071.0, 50.0], [1027.0, 81.0], [1084.0, 25.0], [1034.0, 149.5], [1038.0, 147.0], [1050.0, 24.0], [1041.0, 150.0], [1054.0, 22.0], [1087.0, 24.0], [1060.0, 23.0], [1066.0, 24.0], [1029.0, 31.0], [1147.0, 26.0], [1091.0, 24.0], [1089.0, 23.0], [1121.0, 24.0], [1108.0, 24.0], [1109.0, 23.0], [1117.0, 24.0], [1208.0, 25.0], [1181.0, 177.0], [1178.0, 161.0], [1196.0, 145.5], [1194.0, 141.0], [1188.0, 107.0], [1190.0, 90.0], [1153.0, 177.0], [1200.0, 101.0], [1206.0, 27.0], [1204.0, 72.0], [1175.0, 152.0], [1170.0, 25.0], [1187.0, 25.0], [1186.0, 79.5], [1273.0, 96.0], [1223.0, 90.0], [1219.0, 28.0], [1216.0, 132.0], [1238.0, 112.5], [1224.0, 88.0], [1264.0, 97.0], [1271.0, 123.0], [1266.0, 91.0], [1272.0, 134.0], [1217.0, 108.0], [1255.0, 27.0], [1249.0, 114.0], [1251.0, 147.0], [1274.0, 125.0], [1275.0, 96.0], [1261.0, 159.0], [1258.0, 128.0], [1324.0, 28.0], [1302.0, 59.5], [1288.0, 27.0], [1285.0, 28.0], [1283.0, 27.0], [1280.0, 113.0], [1397.0, 127.0], [1350.0, 30.0], [1358.0, 34.0], [1385.0, 118.0], [1393.0, 68.0], [1386.0, 68.0], [1394.0, 109.0], [1406.0, 73.0], [1404.0, 77.5], [1376.0, 72.5], [1383.0, 50.0], [1456.0, 33.0], [1468.0, 31.0], [1409.0, 29.0], [1416.0, 102.0], [1413.0, 33.0], [1412.0, 38.0], [1422.0, 71.0], [1424.0, 34.0], [1429.0, 93.0], [1437.0, 30.0], [1434.0, 61.0], [1430.0, 83.0], [1432.0, 124.0], [1466.0, 31.5], [1467.0, 35.0], [1470.0, 35.0], [1454.0, 94.5], [1452.0, 105.0], [1453.0, 111.0], [1449.0, 87.0], [1444.0, 104.0], [1471.0, 55.0], [1465.0, 40.0], [1459.0, 81.0], [1463.0, 63.0], [1462.0, 84.0], [1477.0, 36.0], [1528.0, 34.0], [1532.0, 44.5], [1599.0, 123.0], [1550.0, 137.0], [1593.0, 77.0], [1541.0, 107.0], [1538.0, 35.0], [1579.0, 64.0], [1571.0, 61.0], [1576.0, 104.0], [1610.0, 52.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1610.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 12.0, "minX": 299.0, "maxY": 233.5, "series": [{"data": [[299.0, 12.0], [360.0, 21.0], [398.0, 23.0], [414.0, 21.0], [416.0, 22.0], [418.0, 24.0], [441.0, 23.0], [454.0, 21.0], [462.0, 25.0], [465.0, 22.0], [473.0, 21.0], [472.0, 24.0], [489.0, 26.0], [509.0, 27.0], [530.0, 20.0], [534.0, 26.0], [535.0, 32.0], [525.0, 25.0], [533.0, 21.0], [539.0, 21.0], [541.0, 22.0], [540.0, 22.0], [536.0, 20.0], [532.0, 25.0], [531.0, 21.0], [569.0, 32.0], [549.0, 30.0], [575.0, 22.0], [555.0, 23.0], [565.0, 22.0], [574.0, 20.0], [550.0, 22.0], [551.0, 21.0], [563.0, 22.0], [559.0, 24.0], [547.0, 21.0], [546.0, 19.0], [558.0, 21.0], [593.0, 25.0], [582.0, 30.0], [579.0, 23.0], [604.0, 24.0], [586.0, 19.0], [583.0, 21.0], [581.0, 21.0], [576.0, 23.0], [613.0, 20.0], [615.0, 23.0], [652.0, 110.5], [664.0, 32.0], [642.0, 189.0], [700.0, 233.5], [690.0, 157.5], [731.0, 231.0], [713.0, 192.0], [733.0, 21.0], [718.0, 21.0], [715.0, 23.0], [720.0, 21.5], [714.0, 30.0], [727.0, 22.0], [735.0, 20.0], [722.0, 23.5], [724.0, 22.0], [737.0, 20.0], [749.0, 20.0], [746.0, 30.0], [764.0, 143.5], [736.0, 20.0], [759.0, 22.0], [745.0, 21.0], [750.0, 22.0], [768.0, 107.0], [788.0, 23.0], [774.0, 158.0], [781.0, 162.0], [772.0, 22.0], [770.0, 21.0], [826.0, 25.0], [807.0, 21.0], [817.0, 23.0], [820.0, 142.5], [821.0, 165.0], [811.0, 186.0], [803.0, 23.0], [805.0, 22.0], [818.0, 20.0], [810.0, 21.0], [863.0, 21.0], [857.0, 24.0], [841.0, 159.0], [856.0, 170.0], [883.0, 149.0], [890.0, 137.0], [921.0, 142.0], [923.0, 21.0], [907.0, 153.0], [902.0, 30.0], [926.0, 151.0], [908.0, 157.0], [904.0, 20.0], [920.0, 22.0], [906.0, 24.0], [943.0, 22.0], [956.0, 22.0], [932.0, 129.0], [946.0, 173.0], [947.0, 137.0], [951.0, 22.0], [952.0, 21.0], [990.0, 23.0], [986.0, 23.0], [977.0, 23.0], [985.0, 23.0], [984.0, 21.0], [978.0, 27.0], [983.0, 22.0], [982.0, 23.0], [981.0, 24.0], [979.0, 23.0], [980.0, 21.0], [989.0, 22.0], [987.0, 21.0], [988.0, 22.0], [991.0, 21.0], [976.0, 21.0], [970.0, 24.0], [971.0, 22.0], [974.0, 88.0], [975.0, 22.0], [960.0, 22.0], [972.0, 26.0], [962.0, 22.0], [964.0, 25.0], [967.0, 21.0], [999.0, 22.0], [992.0, 22.0], [1013.0, 22.0], [1014.0, 21.0], [1015.0, 21.0], [1012.0, 22.0], [1001.0, 23.0], [1003.0, 22.0], [1002.0, 22.0], [1004.0, 24.0], [1000.0, 23.0], [997.0, 21.0], [1007.0, 22.0], [1006.0, 23.0], [998.0, 22.0], [1008.0, 21.0], [1023.0, 133.0], [1017.0, 22.0], [1019.0, 22.0], [1016.0, 20.0], [1021.0, 142.0], [1010.0, 21.0], [1009.0, 22.0], [1005.0, 23.0], [993.0, 22.0], [1011.0, 22.0], [996.0, 22.0], [995.0, 22.0], [994.0, 23.0], [1080.0, 24.0], [1071.0, 49.0], [1027.0, 81.0], [1084.0, 25.0], [1034.0, 149.5], [1038.0, 147.0], [1050.0, 23.0], [1041.0, 150.0], [1054.0, 22.0], [1087.0, 23.0], [1060.0, 22.0], [1066.0, 24.0], [1029.0, 31.0], [1147.0, 25.0], [1091.0, 24.0], [1089.0, 23.0], [1121.0, 24.0], [1108.0, 24.0], [1109.0, 23.0], [1117.0, 24.0], [1208.0, 25.0], [1181.0, 177.0], [1178.0, 161.0], [1196.0, 145.0], [1194.0, 141.0], [1188.0, 107.0], [1190.0, 89.0], [1153.0, 177.0], [1200.0, 101.0], [1206.0, 27.0], [1204.0, 72.0], [1175.0, 152.0], [1170.0, 25.0], [1187.0, 25.0], [1186.0, 79.5], [1273.0, 95.0], [1223.0, 90.0], [1219.0, 28.0], [1216.0, 132.0], [1238.0, 112.5], [1224.0, 88.0], [1264.0, 97.0], [1271.0, 123.0], [1266.0, 91.0], [1272.0, 134.0], [1217.0, 108.0], [1255.0, 27.0], [1249.0, 114.0], [1251.0, 147.0], [1274.0, 125.0], [1275.0, 96.0], [1261.0, 159.0], [1258.0, 128.0], [1324.0, 28.0], [1302.0, 59.5], [1288.0, 27.0], [1285.0, 27.0], [1283.0, 27.0], [1280.0, 113.0], [1397.0, 127.0], [1350.0, 30.0], [1358.0, 34.0], [1385.0, 118.0], [1393.0, 67.0], [1386.0, 68.0], [1394.0, 109.0], [1406.0, 73.0], [1404.0, 77.5], [1376.0, 72.5], [1383.0, 50.0], [1456.0, 33.0], [1468.0, 31.0], [1409.0, 28.0], [1416.0, 102.0], [1413.0, 32.0], [1412.0, 38.0], [1422.0, 71.0], [1424.0, 34.0], [1429.0, 92.0], [1437.0, 30.0], [1434.0, 61.0], [1430.0, 83.0], [1432.0, 124.0], [1466.0, 31.5], [1467.0, 35.0], [1470.0, 35.0], [1454.0, 94.5], [1452.0, 105.0], [1453.0, 111.0], [1449.0, 87.0], [1444.0, 104.0], [1471.0, 55.0], [1465.0, 40.0], [1459.0, 81.0], [1463.0, 62.0], [1462.0, 83.5], [1477.0, 36.0], [1528.0, 34.0], [1532.0, 44.0], [1599.0, 123.0], [1550.0, 137.0], [1593.0, 77.0], [1541.0, 107.0], [1538.0, 35.0], [1579.0, 64.0], [1571.0, 61.0], [1576.0, 104.0], [1610.0, 52.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1610.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 287.9166666666667, "minX": 1.63342548E12, "maxY": 998.1166666666667, "series": [{"data": [[1.63342602E12, 996.0666666666667], [1.63342632E12, 990.8166666666667], [1.63342638E12, 287.9166666666667], [1.63342572E12, 997.8833333333333], [1.63342626E12, 996.35], [1.6334256E12, 998.1166666666667], [1.63342566E12, 994.8333333333334], [1.63342596E12, 997.5333333333333], [1.63342584E12, 997.9833333333333], [1.6334259E12, 997.5333333333333], [1.63342554E12, 997.2333333333333], [1.6334262E12, 994.7666666666667], [1.63342548E12, 721.2166666666667], [1.63342578E12, 996.1], [1.63342608E12, 997.1], [1.63342614E12, 997.0166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63342638E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 287.9166666666667, "minX": 1.63342548E12, "maxY": 1007.9833333333333, "series": [{"data": [[1.63342602E12, 995.9333333333333], [1.63342632E12, 991.55], [1.63342638E12, 287.9166666666667], [1.63342572E12, 998.3166666666667], [1.63342626E12, 995.6166666666667], [1.6334256E12, 1007.9833333333333], [1.63342566E12, 994.5333333333333], [1.63342596E12, 997.1333333333333], [1.63342584E12, 997.2666666666667], [1.6334259E12, 998.3333333333334], [1.63342554E12, 988.0333333333333], [1.6334262E12, 994.7666666666667], [1.63342548E12, 720.4166666666666], [1.63342578E12, 996.0166666666667], [1.63342608E12, 997.1], [1.63342614E12, 997.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63342638E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 287.9166666666667, "minX": 1.63342548E12, "maxY": 1007.9833333333333, "series": [{"data": [[1.63342602E12, 995.9333333333333], [1.63342632E12, 991.55], [1.63342638E12, 287.9166666666667], [1.63342572E12, 998.3166666666667], [1.63342626E12, 995.6166666666667], [1.6334256E12, 1007.9833333333333], [1.63342566E12, 994.5333333333333], [1.63342596E12, 997.1333333333333], [1.63342584E12, 997.2666666666667], [1.6334259E12, 998.3333333333334], [1.63342554E12, 988.0333333333333], [1.6334262E12, 994.7666666666667], [1.63342548E12, 720.4166666666666], [1.63342578E12, 996.0166666666667], [1.63342608E12, 997.1], [1.63342614E12, 997.55]], "isOverall": false, "label": "AuthzUser-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63342638E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 287.9166666666667, "minX": 1.63342548E12, "maxY": 1007.9833333333333, "series": [{"data": [[1.63342602E12, 995.9333333333333], [1.63342632E12, 991.55], [1.63342638E12, 287.9166666666667], [1.63342572E12, 998.3166666666667], [1.63342626E12, 995.6166666666667], [1.6334256E12, 1007.9833333333333], [1.63342566E12, 994.5333333333333], [1.63342596E12, 997.1333333333333], [1.63342584E12, 997.2666666666667], [1.6334259E12, 998.3333333333334], [1.63342554E12, 988.0333333333333], [1.6334262E12, 994.7666666666667], [1.63342548E12, 720.4166666666666], [1.63342578E12, 996.0166666666667], [1.63342608E12, 997.1], [1.63342614E12, 997.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63342638E12, "title": "Total Transactions Per Second"}},
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

