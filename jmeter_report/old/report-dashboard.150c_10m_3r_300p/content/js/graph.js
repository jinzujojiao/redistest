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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 4092.0, "series": [{"data": [[0.0, 6.0], [0.1, 16.0], [0.2, 19.0], [0.3, 22.0], [0.4, 24.0], [0.5, 25.0], [0.6, 27.0], [0.7, 28.0], [0.8, 29.0], [0.9, 30.0], [1.0, 31.0], [1.1, 32.0], [1.2, 33.0], [1.3, 34.0], [1.4, 34.0], [1.5, 35.0], [1.6, 36.0], [1.7, 36.0], [1.8, 37.0], [1.9, 38.0], [2.0, 38.0], [2.1, 39.0], [2.2, 39.0], [2.3, 40.0], [2.4, 40.0], [2.5, 41.0], [2.6, 41.0], [2.7, 42.0], [2.8, 42.0], [2.9, 43.0], [3.0, 43.0], [3.1, 43.0], [3.2, 44.0], [3.3, 44.0], [3.4, 45.0], [3.5, 45.0], [3.6, 45.0], [3.7, 46.0], [3.8, 46.0], [3.9, 46.0], [4.0, 47.0], [4.1, 47.0], [4.2, 47.0], [4.3, 48.0], [4.4, 48.0], [4.5, 48.0], [4.6, 49.0], [4.7, 49.0], [4.8, 49.0], [4.9, 49.0], [5.0, 50.0], [5.1, 50.0], [5.2, 50.0], [5.3, 51.0], [5.4, 51.0], [5.5, 51.0], [5.6, 51.0], [5.7, 52.0], [5.8, 52.0], [5.9, 52.0], [6.0, 52.0], [6.1, 53.0], [6.2, 53.0], [6.3, 53.0], [6.4, 53.0], [6.5, 54.0], [6.6, 54.0], [6.7, 54.0], [6.8, 54.0], [6.9, 55.0], [7.0, 55.0], [7.1, 55.0], [7.2, 55.0], [7.3, 55.0], [7.4, 56.0], [7.5, 56.0], [7.6, 56.0], [7.7, 56.0], [7.8, 56.0], [7.9, 57.0], [8.0, 57.0], [8.1, 57.0], [8.2, 57.0], [8.3, 57.0], [8.4, 58.0], [8.5, 58.0], [8.6, 58.0], [8.7, 58.0], [8.8, 58.0], [8.9, 59.0], [9.0, 59.0], [9.1, 59.0], [9.2, 59.0], [9.3, 59.0], [9.4, 60.0], [9.5, 60.0], [9.6, 60.0], [9.7, 60.0], [9.8, 60.0], [9.9, 61.0], [10.0, 61.0], [10.1, 61.0], [10.2, 61.0], [10.3, 61.0], [10.4, 61.0], [10.5, 62.0], [10.6, 62.0], [10.7, 62.0], [10.8, 62.0], [10.9, 62.0], [11.0, 63.0], [11.1, 63.0], [11.2, 63.0], [11.3, 63.0], [11.4, 63.0], [11.5, 63.0], [11.6, 64.0], [11.7, 64.0], [11.8, 64.0], [11.9, 64.0], [12.0, 64.0], [12.1, 64.0], [12.2, 64.0], [12.3, 65.0], [12.4, 65.0], [12.5, 65.0], [12.6, 65.0], [12.7, 65.0], [12.8, 65.0], [12.9, 66.0], [13.0, 66.0], [13.1, 66.0], [13.2, 66.0], [13.3, 66.0], [13.4, 66.0], [13.5, 66.0], [13.6, 67.0], [13.7, 67.0], [13.8, 67.0], [13.9, 67.0], [14.0, 67.0], [14.1, 67.0], [14.2, 68.0], [14.3, 68.0], [14.4, 68.0], [14.5, 68.0], [14.6, 68.0], [14.7, 68.0], [14.8, 68.0], [14.9, 69.0], [15.0, 69.0], [15.1, 69.0], [15.2, 69.0], [15.3, 69.0], [15.4, 69.0], [15.5, 69.0], [15.6, 70.0], [15.7, 70.0], [15.8, 70.0], [15.9, 70.0], [16.0, 70.0], [16.1, 70.0], [16.2, 70.0], [16.3, 71.0], [16.4, 71.0], [16.5, 71.0], [16.6, 71.0], [16.7, 71.0], [16.8, 71.0], [16.9, 71.0], [17.0, 72.0], [17.1, 72.0], [17.2, 72.0], [17.3, 72.0], [17.4, 72.0], [17.5, 72.0], [17.6, 72.0], [17.7, 73.0], [17.8, 73.0], [17.9, 73.0], [18.0, 73.0], [18.1, 73.0], [18.2, 73.0], [18.3, 73.0], [18.4, 73.0], [18.5, 74.0], [18.6, 74.0], [18.7, 74.0], [18.8, 74.0], [18.9, 74.0], [19.0, 74.0], [19.1, 74.0], [19.2, 74.0], [19.3, 75.0], [19.4, 75.0], [19.5, 75.0], [19.6, 75.0], [19.7, 75.0], [19.8, 75.0], [19.9, 75.0], [20.0, 76.0], [20.1, 76.0], [20.2, 76.0], [20.3, 76.0], [20.4, 76.0], [20.5, 76.0], [20.6, 76.0], [20.7, 76.0], [20.8, 77.0], [20.9, 77.0], [21.0, 77.0], [21.1, 77.0], [21.2, 77.0], [21.3, 77.0], [21.4, 77.0], [21.5, 77.0], [21.6, 78.0], [21.7, 78.0], [21.8, 78.0], [21.9, 78.0], [22.0, 78.0], [22.1, 78.0], [22.2, 78.0], [22.3, 78.0], [22.4, 79.0], [22.5, 79.0], [22.6, 79.0], [22.7, 79.0], [22.8, 79.0], [22.9, 79.0], [23.0, 79.0], [23.1, 79.0], [23.2, 79.0], [23.3, 80.0], [23.4, 80.0], [23.5, 80.0], [23.6, 80.0], [23.7, 80.0], [23.8, 80.0], [23.9, 80.0], [24.0, 80.0], [24.1, 80.0], [24.2, 81.0], [24.3, 81.0], [24.4, 81.0], [24.5, 81.0], [24.6, 81.0], [24.7, 81.0], [24.8, 81.0], [24.9, 81.0], [25.0, 82.0], [25.1, 82.0], [25.2, 82.0], [25.3, 82.0], [25.4, 82.0], [25.5, 82.0], [25.6, 82.0], [25.7, 82.0], [25.8, 82.0], [25.9, 83.0], [26.0, 83.0], [26.1, 83.0], [26.2, 83.0], [26.3, 83.0], [26.4, 83.0], [26.5, 83.0], [26.6, 83.0], [26.7, 84.0], [26.8, 84.0], [26.9, 84.0], [27.0, 84.0], [27.1, 84.0], [27.2, 84.0], [27.3, 84.0], [27.4, 84.0], [27.5, 84.0], [27.6, 85.0], [27.7, 85.0], [27.8, 85.0], [27.9, 85.0], [28.0, 85.0], [28.1, 85.0], [28.2, 85.0], [28.3, 85.0], [28.4, 85.0], [28.5, 86.0], [28.6, 86.0], [28.7, 86.0], [28.8, 86.0], [28.9, 86.0], [29.0, 86.0], [29.1, 86.0], [29.2, 86.0], [29.3, 86.0], [29.4, 87.0], [29.5, 87.0], [29.6, 87.0], [29.7, 87.0], [29.8, 87.0], [29.9, 87.0], [30.0, 87.0], [30.1, 87.0], [30.2, 88.0], [30.3, 88.0], [30.4, 88.0], [30.5, 88.0], [30.6, 88.0], [30.7, 88.0], [30.8, 88.0], [30.9, 88.0], [31.0, 88.0], [31.1, 89.0], [31.2, 89.0], [31.3, 89.0], [31.4, 89.0], [31.5, 89.0], [31.6, 89.0], [31.7, 89.0], [31.8, 89.0], [31.9, 89.0], [32.0, 90.0], [32.1, 90.0], [32.2, 90.0], [32.3, 90.0], [32.4, 90.0], [32.5, 90.0], [32.6, 90.0], [32.7, 90.0], [32.8, 90.0], [32.9, 91.0], [33.0, 91.0], [33.1, 91.0], [33.2, 91.0], [33.3, 91.0], [33.4, 91.0], [33.5, 91.0], [33.6, 91.0], [33.7, 91.0], [33.8, 92.0], [33.9, 92.0], [34.0, 92.0], [34.1, 92.0], [34.2, 92.0], [34.3, 92.0], [34.4, 92.0], [34.5, 92.0], [34.6, 92.0], [34.7, 93.0], [34.8, 93.0], [34.9, 93.0], [35.0, 93.0], [35.1, 93.0], [35.2, 93.0], [35.3, 93.0], [35.4, 93.0], [35.5, 93.0], [35.6, 94.0], [35.7, 94.0], [35.8, 94.0], [35.9, 94.0], [36.0, 94.0], [36.1, 94.0], [36.2, 94.0], [36.3, 94.0], [36.4, 94.0], [36.5, 95.0], [36.6, 95.0], [36.7, 95.0], [36.8, 95.0], [36.9, 95.0], [37.0, 95.0], [37.1, 95.0], [37.2, 95.0], [37.3, 95.0], [37.4, 96.0], [37.5, 96.0], [37.6, 96.0], [37.7, 96.0], [37.8, 96.0], [37.9, 96.0], [38.0, 96.0], [38.1, 96.0], [38.2, 96.0], [38.3, 97.0], [38.4, 97.0], [38.5, 97.0], [38.6, 97.0], [38.7, 97.0], [38.8, 97.0], [38.9, 97.0], [39.0, 97.0], [39.1, 97.0], [39.2, 98.0], [39.3, 98.0], [39.4, 98.0], [39.5, 98.0], [39.6, 98.0], [39.7, 98.0], [39.8, 98.0], [39.9, 98.0], [40.0, 98.0], [40.1, 99.0], [40.2, 99.0], [40.3, 99.0], [40.4, 99.0], [40.5, 99.0], [40.6, 99.0], [40.7, 99.0], [40.8, 99.0], [40.9, 99.0], [41.0, 100.0], [41.1, 100.0], [41.2, 100.0], [41.3, 100.0], [41.4, 100.0], [41.5, 100.0], [41.6, 100.0], [41.7, 100.0], [41.8, 101.0], [41.9, 101.0], [42.0, 101.0], [42.1, 101.0], [42.2, 101.0], [42.3, 101.0], [42.4, 101.0], [42.5, 101.0], [42.6, 101.0], [42.7, 102.0], [42.8, 102.0], [42.9, 102.0], [43.0, 102.0], [43.1, 102.0], [43.2, 102.0], [43.3, 102.0], [43.4, 102.0], [43.5, 103.0], [43.6, 103.0], [43.7, 103.0], [43.8, 103.0], [43.9, 103.0], [44.0, 103.0], [44.1, 103.0], [44.2, 103.0], [44.3, 103.0], [44.4, 104.0], [44.5, 104.0], [44.6, 104.0], [44.7, 104.0], [44.8, 104.0], [44.9, 104.0], [45.0, 104.0], [45.1, 104.0], [45.2, 105.0], [45.3, 105.0], [45.4, 105.0], [45.5, 105.0], [45.6, 105.0], [45.7, 105.0], [45.8, 105.0], [45.9, 105.0], [46.0, 106.0], [46.1, 106.0], [46.2, 106.0], [46.3, 106.0], [46.4, 106.0], [46.5, 106.0], [46.6, 106.0], [46.7, 106.0], [46.8, 106.0], [46.9, 107.0], [47.0, 107.0], [47.1, 107.0], [47.2, 107.0], [47.3, 107.0], [47.4, 107.0], [47.5, 107.0], [47.6, 107.0], [47.7, 108.0], [47.8, 108.0], [47.9, 108.0], [48.0, 108.0], [48.1, 108.0], [48.2, 108.0], [48.3, 108.0], [48.4, 108.0], [48.5, 109.0], [48.6, 109.0], [48.7, 109.0], [48.8, 109.0], [48.9, 109.0], [49.0, 109.0], [49.1, 109.0], [49.2, 109.0], [49.3, 110.0], [49.4, 110.0], [49.5, 110.0], [49.6, 110.0], [49.7, 110.0], [49.8, 110.0], [49.9, 110.0], [50.0, 110.0], [50.1, 111.0], [50.2, 111.0], [50.3, 111.0], [50.4, 111.0], [50.5, 111.0], [50.6, 111.0], [50.7, 111.0], [50.8, 112.0], [50.9, 112.0], [51.0, 112.0], [51.1, 112.0], [51.2, 112.0], [51.3, 112.0], [51.4, 112.0], [51.5, 112.0], [51.6, 113.0], [51.7, 113.0], [51.8, 113.0], [51.9, 113.0], [52.0, 113.0], [52.1, 113.0], [52.2, 113.0], [52.3, 113.0], [52.4, 114.0], [52.5, 114.0], [52.6, 114.0], [52.7, 114.0], [52.8, 114.0], [52.9, 114.0], [53.0, 114.0], [53.1, 115.0], [53.2, 115.0], [53.3, 115.0], [53.4, 115.0], [53.5, 115.0], [53.6, 115.0], [53.7, 115.0], [53.8, 116.0], [53.9, 116.0], [54.0, 116.0], [54.1, 116.0], [54.2, 116.0], [54.3, 116.0], [54.4, 116.0], [54.5, 117.0], [54.6, 117.0], [54.7, 117.0], [54.8, 117.0], [54.9, 117.0], [55.0, 117.0], [55.1, 117.0], [55.2, 117.0], [55.3, 118.0], [55.4, 118.0], [55.5, 118.0], [55.6, 118.0], [55.7, 118.0], [55.8, 118.0], [55.9, 118.0], [56.0, 119.0], [56.1, 119.0], [56.2, 119.0], [56.3, 119.0], [56.4, 119.0], [56.5, 119.0], [56.6, 120.0], [56.7, 120.0], [56.8, 120.0], [56.9, 120.0], [57.0, 120.0], [57.1, 120.0], [57.2, 120.0], [57.3, 121.0], [57.4, 121.0], [57.5, 121.0], [57.6, 121.0], [57.7, 121.0], [57.8, 121.0], [57.9, 121.0], [58.0, 122.0], [58.1, 122.0], [58.2, 122.0], [58.3, 122.0], [58.4, 122.0], [58.5, 122.0], [58.6, 123.0], [58.7, 123.0], [58.8, 123.0], [58.9, 123.0], [59.0, 123.0], [59.1, 123.0], [59.2, 123.0], [59.3, 124.0], [59.4, 124.0], [59.5, 124.0], [59.6, 124.0], [59.7, 124.0], [59.8, 124.0], [59.9, 125.0], [60.0, 125.0], [60.1, 125.0], [60.2, 125.0], [60.3, 125.0], [60.4, 125.0], [60.5, 126.0], [60.6, 126.0], [60.7, 126.0], [60.8, 126.0], [60.9, 126.0], [61.0, 126.0], [61.1, 127.0], [61.2, 127.0], [61.3, 127.0], [61.4, 127.0], [61.5, 127.0], [61.6, 127.0], [61.7, 128.0], [61.8, 128.0], [61.9, 128.0], [62.0, 128.0], [62.1, 128.0], [62.2, 128.0], [62.3, 129.0], [62.4, 129.0], [62.5, 129.0], [62.6, 129.0], [62.7, 129.0], [62.8, 129.0], [62.9, 130.0], [63.0, 130.0], [63.1, 130.0], [63.2, 130.0], [63.3, 130.0], [63.4, 131.0], [63.5, 131.0], [63.6, 131.0], [63.7, 131.0], [63.8, 131.0], [63.9, 132.0], [64.0, 132.0], [64.1, 132.0], [64.2, 132.0], [64.3, 132.0], [64.4, 132.0], [64.5, 133.0], [64.6, 133.0], [64.7, 133.0], [64.8, 133.0], [64.9, 133.0], [65.0, 134.0], [65.1, 134.0], [65.2, 134.0], [65.3, 134.0], [65.4, 134.0], [65.5, 135.0], [65.6, 135.0], [65.7, 135.0], [65.8, 135.0], [65.9, 136.0], [66.0, 136.0], [66.1, 136.0], [66.2, 136.0], [66.3, 136.0], [66.4, 137.0], [66.5, 137.0], [66.6, 137.0], [66.7, 137.0], [66.8, 137.0], [66.9, 138.0], [67.0, 138.0], [67.1, 138.0], [67.2, 138.0], [67.3, 139.0], [67.4, 139.0], [67.5, 139.0], [67.6, 139.0], [67.7, 140.0], [67.8, 140.0], [67.9, 140.0], [68.0, 140.0], [68.1, 140.0], [68.2, 141.0], [68.3, 141.0], [68.4, 141.0], [68.5, 141.0], [68.6, 142.0], [68.7, 142.0], [68.8, 142.0], [68.9, 142.0], [69.0, 143.0], [69.1, 143.0], [69.2, 143.0], [69.3, 143.0], [69.4, 144.0], [69.5, 144.0], [69.6, 144.0], [69.7, 144.0], [69.8, 145.0], [69.9, 145.0], [70.0, 145.0], [70.1, 146.0], [70.2, 146.0], [70.3, 146.0], [70.4, 146.0], [70.5, 147.0], [70.6, 147.0], [70.7, 147.0], [70.8, 147.0], [70.9, 148.0], [71.0, 148.0], [71.1, 148.0], [71.2, 149.0], [71.3, 149.0], [71.4, 149.0], [71.5, 150.0], [71.6, 150.0], [71.7, 150.0], [71.8, 150.0], [71.9, 151.0], [72.0, 151.0], [72.1, 151.0], [72.2, 152.0], [72.3, 152.0], [72.4, 152.0], [72.5, 153.0], [72.6, 153.0], [72.7, 153.0], [72.8, 154.0], [72.9, 154.0], [73.0, 154.0], [73.1, 155.0], [73.2, 155.0], [73.3, 156.0], [73.4, 156.0], [73.5, 156.0], [73.6, 157.0], [73.7, 157.0], [73.8, 157.0], [73.9, 158.0], [74.0, 158.0], [74.1, 159.0], [74.2, 159.0], [74.3, 159.0], [74.4, 160.0], [74.5, 160.0], [74.6, 161.0], [74.7, 161.0], [74.8, 162.0], [74.9, 162.0], [75.0, 162.0], [75.1, 163.0], [75.2, 163.0], [75.3, 164.0], [75.4, 164.0], [75.5, 165.0], [75.6, 165.0], [75.7, 166.0], [75.8, 166.0], [75.9, 167.0], [76.0, 167.0], [76.1, 168.0], [76.2, 168.0], [76.3, 169.0], [76.4, 169.0], [76.5, 170.0], [76.6, 171.0], [76.7, 171.0], [76.8, 172.0], [76.9, 173.0], [77.0, 173.0], [77.1, 174.0], [77.2, 174.0], [77.3, 175.0], [77.4, 176.0], [77.5, 176.0], [77.6, 177.0], [77.7, 178.0], [77.8, 179.0], [77.9, 179.0], [78.0, 180.0], [78.1, 181.0], [78.2, 182.0], [78.3, 183.0], [78.4, 184.0], [78.5, 185.0], [78.6, 186.0], [78.7, 187.0], [78.8, 188.0], [78.9, 189.0], [79.0, 190.0], [79.1, 191.0], [79.2, 192.0], [79.3, 193.0], [79.4, 195.0], [79.5, 196.0], [79.6, 197.0], [79.7, 199.0], [79.8, 201.0], [79.9, 202.0], [80.0, 204.0], [80.1, 206.0], [80.2, 209.0], [80.3, 211.0], [80.4, 214.0], [80.5, 217.0], [80.6, 220.0], [80.7, 224.0], [80.8, 229.0], [80.9, 236.0], [81.0, 245.0], [81.1, 264.0], [81.2, 324.0], [81.3, 363.0], [81.4, 377.0], [81.5, 387.0], [81.6, 395.0], [81.7, 401.0], [81.8, 406.0], [81.9, 411.0], [82.0, 415.0], [82.1, 419.0], [82.2, 422.0], [82.3, 425.0], [82.4, 429.0], [82.5, 431.0], [82.6, 434.0], [82.7, 436.0], [82.8, 439.0], [82.9, 441.0], [83.0, 443.0], [83.1, 445.0], [83.2, 447.0], [83.3, 449.0], [83.4, 452.0], [83.5, 453.0], [83.6, 455.0], [83.7, 457.0], [83.8, 458.0], [83.9, 460.0], [84.0, 462.0], [84.1, 464.0], [84.2, 465.0], [84.3, 467.0], [84.4, 469.0], [84.5, 470.0], [84.6, 472.0], [84.7, 473.0], [84.8, 475.0], [84.9, 476.0], [85.0, 478.0], [85.1, 479.0], [85.2, 480.0], [85.3, 482.0], [85.4, 483.0], [85.5, 484.0], [85.6, 486.0], [85.7, 487.0], [85.8, 488.0], [85.9, 490.0], [86.0, 491.0], [86.1, 492.0], [86.2, 494.0], [86.3, 495.0], [86.4, 496.0], [86.5, 497.0], [86.6, 499.0], [86.7, 500.0], [86.8, 501.0], [86.9, 502.0], [87.0, 504.0], [87.1, 505.0], [87.2, 506.0], [87.3, 507.0], [87.4, 508.0], [87.5, 510.0], [87.6, 511.0], [87.7, 512.0], [87.8, 513.0], [87.9, 514.0], [88.0, 516.0], [88.1, 517.0], [88.2, 518.0], [88.3, 519.0], [88.4, 520.0], [88.5, 521.0], [88.6, 523.0], [88.7, 524.0], [88.8, 525.0], [88.9, 526.0], [89.0, 527.0], [89.1, 528.0], [89.2, 530.0], [89.3, 531.0], [89.4, 532.0], [89.5, 533.0], [89.6, 534.0], [89.7, 535.0], [89.8, 536.0], [89.9, 537.0], [90.0, 539.0], [90.1, 540.0], [90.2, 541.0], [90.3, 542.0], [90.4, 544.0], [90.5, 545.0], [90.6, 546.0], [90.7, 547.0], [90.8, 548.0], [90.9, 550.0], [91.0, 551.0], [91.1, 552.0], [91.2, 553.0], [91.3, 555.0], [91.4, 556.0], [91.5, 557.0], [91.6, 558.0], [91.7, 560.0], [91.8, 561.0], [91.9, 562.0], [92.0, 564.0], [92.1, 565.0], [92.2, 566.0], [92.3, 568.0], [92.4, 569.0], [92.5, 570.0], [92.6, 572.0], [92.7, 573.0], [92.8, 574.0], [92.9, 576.0], [93.0, 577.0], [93.1, 578.0], [93.2, 580.0], [93.3, 581.0], [93.4, 583.0], [93.5, 584.0], [93.6, 586.0], [93.7, 587.0], [93.8, 589.0], [93.9, 590.0], [94.0, 592.0], [94.1, 594.0], [94.2, 595.0], [94.3, 597.0], [94.4, 599.0], [94.5, 600.0], [94.6, 602.0], [94.7, 604.0], [94.8, 606.0], [94.9, 608.0], [95.0, 610.0], [95.1, 611.0], [95.2, 613.0], [95.3, 615.0], [95.4, 617.0], [95.5, 620.0], [95.6, 622.0], [95.7, 624.0], [95.8, 626.0], [95.9, 629.0], [96.0, 631.0], [96.1, 633.0], [96.2, 636.0], [96.3, 639.0], [96.4, 641.0], [96.5, 644.0], [96.6, 647.0], [96.7, 650.0], [96.8, 653.0], [96.9, 656.0], [97.0, 660.0], [97.1, 663.0], [97.2, 667.0], [97.3, 671.0], [97.4, 675.0], [97.5, 679.0], [97.6, 684.0], [97.7, 689.0], [97.8, 694.0], [97.9, 700.0], [98.0, 706.0], [98.1, 713.0], [98.2, 720.0], [98.3, 728.0], [98.4, 738.0], [98.5, 749.0], [98.6, 761.0], [98.7, 776.0], [98.8, 797.0], [98.9, 823.0], [99.0, 856.0], [99.1, 893.0], [99.2, 931.0], [99.3, 973.0], [99.4, 1021.0], [99.5, 1081.0], [99.6, 1203.0], [99.7, 1452.0], [99.8, 1528.0], [99.9, 1612.0], [100.0, 4092.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 189983.0, "series": [{"data": [[0.0, 189983.0], [600.0, 15962.0], [700.0, 4271.0], [800.0, 1431.0], [900.0, 1132.0], [1000.0, 754.0], [1100.0, 336.0], [1200.0, 131.0], [1300.0, 145.0], [1400.0, 478.0], [1500.0, 598.0], [100.0, 180149.0], [1600.0, 292.0], [1700.0, 87.0], [1800.0, 36.0], [1900.0, 42.0], [2000.0, 24.0], [2100.0, 14.0], [2200.0, 3.0], [2300.0, 1.0], [2500.0, 2.0], [2600.0, 6.0], [2800.0, 1.0], [2900.0, 1.0], [200.0, 6647.0], [3400.0, 2.0], [3500.0, 1.0], [3600.0, 2.0], [3700.0, 1.0], [4000.0, 1.0], [300.0, 2325.0], [400.0, 23202.0], [500.0, 36130.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1108.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 402684.0, "series": [{"data": [[0.0, 402684.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 60398.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1108.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 148.6709997636493, "minX": 1.61959314E12, "maxY": 150.0, "series": [{"data": [[1.61959314E12, 149.39213548665197], [1.61959362E12, 150.0], [1.61959344E12, 150.0], [1.6195935E12, 150.0], [1.61959332E12, 150.0], [1.61959338E12, 150.0], [1.6195932E12, 150.0], [1.61959368E12, 150.0], [1.61959326E12, 150.0], [1.61959374E12, 148.6709997636493], [1.61959356E12, 150.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959374E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 17.5, "minX": 1.0, "maxY": 1485.0, "series": [{"data": [[2.0, 1312.0], [3.0, 1341.0], [4.0, 1325.0], [5.0, 458.0], [6.0, 380.0], [7.0, 621.0], [8.0, 346.0], [9.0, 342.0], [10.0, 729.0], [11.0, 378.0], [12.0, 343.0], [13.0, 420.0], [14.0, 383.0], [15.0, 324.0], [16.0, 381.0], [17.0, 319.0], [18.0, 417.0], [19.0, 317.0], [20.0, 394.0], [21.0, 394.0], [22.0, 412.0], [23.0, 365.0], [24.0, 532.0], [26.0, 608.5], [27.0, 737.0], [28.0, 353.0], [29.0, 322.0], [30.0, 484.0], [31.0, 636.0], [32.0, 125.28571428571428], [33.0, 97.14285714285714], [34.0, 350.5], [35.0, 101.5], [36.0, 132.0], [37.0, 166.66666666666666], [38.0, 207.66666666666666], [39.0, 68.5], [40.0, 242.0], [41.0, 17.5], [42.0, 438.66666666666663], [43.0, 234.0], [44.0, 19.0], [45.0, 309.8333333333333], [46.0, 238.5], [47.0, 204.33333333333334], [48.0, 203.5], [49.0, 206.0], [51.0, 196.5], [50.0, 440.0], [52.0, 22.0], [53.0, 169.16666666666666], [54.0, 135.2], [55.0, 409.0], [56.0, 51.6], [57.0, 19.0], [58.0, 354.5], [59.0, 100.4], [61.0, 52.0], [60.0, 408.0], [62.0, 226.66666666666666], [63.0, 226.8], [64.0, 143.375], [67.0, 131.0], [66.0, 705.0], [68.0, 143.875], [69.0, 183.5], [70.0, 221.0], [71.0, 138.0], [72.0, 276.0], [73.0, 188.42857142857144], [74.0, 162.39999999999998], [75.0, 79.83333333333333], [76.0, 79.0], [79.0, 154.0], [78.0, 126.0], [77.0, 499.0], [80.0, 111.5], [81.0, 151.5], [82.0, 193.0], [83.0, 213.25], [84.0, 226.0], [85.0, 159.33333333333334], [86.0, 54.0], [87.0, 146.0], [88.0, 107.0], [89.0, 87.33333333333334], [90.0, 73.75], [91.0, 61.0], [92.0, 55.8], [93.0, 136.2], [94.0, 116.7], [95.0, 134.33333333333331], [96.0, 228.49999999999997], [97.0, 218.5], [98.0, 79.63636363636364], [99.0, 60.57142857142857], [100.0, 80.25], [101.0, 159.33333333333334], [102.0, 135.33333333333331], [103.0, 136.88888888888889], [104.0, 57.63636363636363], [105.0, 99.0], [106.0, 147.25], [107.0, 74.25], [108.0, 104.375], [109.0, 68.0], [110.0, 356.6], [111.0, 56.5], [112.0, 166.14285714285714], [113.0, 270.2], [114.0, 155.0], [115.0, 129.9], [116.0, 86.0], [117.0, 51.0], [118.0, 63.8], [119.0, 177.0], [120.0, 58.0], [122.0, 140.33333333333334], [123.0, 192.66666666666666], [124.0, 60.0], [125.0, 256.00000000000006], [127.0, 137.77777777777777], [126.0, 398.5], [128.0, 117.5], [129.0, 205.5], [130.0, 115.75], [131.0, 284.55555555555554], [132.0, 84.5], [133.0, 267.1666666666667], [134.0, 215.6], [135.0, 209.0], [136.0, 240.5], [137.0, 102.77777777777777], [138.0, 229.57142857142856], [139.0, 234.25], [140.0, 232.57142857142858], [141.0, 167.8], [142.0, 94.0], [143.0, 132.875], [144.0, 221.24999999999997], [145.0, 245.63636363636363], [146.0, 187.8], [147.0, 249.5], [148.0, 205.42857142857142], [149.0, 442.0], [150.0, 193.74691640313776], [1.0, 1485.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}, {"data": [[149.92412158814727, 193.7338288200931]], "isOverall": false, "label": "AuthzRequest-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22283.266666666666, "minX": 1.61959314E12, "maxY": 241390.33333333334, "series": [{"data": [[1.61959314E12, 199697.11666666667], [1.61959362E12, 239361.75], [1.61959344E12, 220854.45], [1.6195935E12, 228233.43333333332], [1.61959332E12, 237121.55], [1.61959338E12, 229524.46666666667], [1.6195932E12, 241390.33333333334], [1.61959368E12, 235260.4], [1.61959326E12, 241295.03333333333], [1.61959374E12, 42834.5], [1.61959356E12, 234115.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61959314E12, 103866.56666666667], [1.61959362E12, 124522.43333333333], [1.61959344E12, 114894.96666666666], [1.6195935E12, 118734.36666666667], [1.61959332E12, 123361.13333333333], [1.61959338E12, 119405.86666666667], [1.6195932E12, 125581.03333333334], [1.61959368E12, 122392.06666666667], [1.61959326E12, 125531.0], [1.61959374E12, 22283.266666666666], [1.61959356E12, 121794.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959374E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 184.04690312603023, "minX": 1.61959314E12, "maxY": 206.34179826270392, "series": [{"data": [[1.61959314E12, 184.04690312603023], [1.61959362E12, 190.11815086598833], [1.61959344E12, 206.34179826270392], [1.6195935E12, 199.47419548005055], [1.61959332E12, 192.29885155616373], [1.61959338E12, 198.07359297812306], [1.6195932E12, 188.5584306653515], [1.61959368E12, 193.60497439648782], [1.61959326E12, 188.78072162785787], [1.61959374E12, 200.12089340581454], [1.61959356E12, 194.80270696849595]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959374E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 183.99667875161572, "minX": 1.61959314E12, "maxY": 206.26898306249973, "series": [{"data": [[1.61959314E12, 183.99667875161572], [1.61959362E12, 190.0571615877505], [1.61959344E12, 206.26898306249973], [1.6195935E12, 199.4123843953078], [1.61959332E12, 192.2150450411989], [1.61959338E12, 197.98330539872953], [1.6195932E12, 188.5035542787645], [1.61959368E12, 193.53664099143694], [1.61959326E12, 188.71518774910783], [1.61959374E12, 200.0531789175129], [1.61959356E12, 194.7427515080763]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959374E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.12025834049780942, "minX": 1.61959314E12, "maxY": 0.15651353052234154, "series": [{"data": [[1.61959314E12, 0.1392642547473574], [1.61959362E12, 0.12866115422843422], [1.61959344E12, 0.14794526827255763], [1.6195935E12, 0.13939098227949356], [1.61959332E12, 0.13574264611706466], [1.61959338E12, 0.1519936485532796], [1.6195932E12, 0.12025834049780942], [1.61959368E12, 0.14817763242824522], [1.61959326E12, 0.15651353052234154], [1.61959374E12, 0.13625620420704318], [1.61959356E12, 0.13169444984973214]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959374E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.61959314E12, "maxY": 4092.0, "series": [{"data": [[1.61959314E12, 2148.0], [1.61959362E12, 3741.0], [1.61959344E12, 2242.0], [1.6195935E12, 2633.0], [1.61959332E12, 2112.0], [1.61959338E12, 3695.0], [1.6195932E12, 4092.0], [1.61959368E12, 3616.0], [1.61959326E12, 2018.0], [1.61959374E12, 2858.0], [1.61959356E12, 2211.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61959314E12, 520.0], [1.61959362E12, 524.0], [1.61959344E12, 559.0], [1.6195935E12, 536.0], [1.61959332E12, 534.0], [1.61959338E12, 547.0], [1.6195932E12, 503.0], [1.61959368E12, 528.0], [1.61959326E12, 534.0], [1.61959374E12, 541.0], [1.61959356E12, 528.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61959314E12, 826.9900000000016], [1.61959362E12, 804.9900000000016], [1.61959344E12, 902.9800000000032], [1.6195935E12, 835.0], [1.61959332E12, 780.0], [1.61959338E12, 827.0], [1.6195932E12, 782.9900000000016], [1.61959368E12, 834.9900000000016], [1.61959326E12, 790.0], [1.61959374E12, 908.2200000000048], [1.61959356E12, 787.9800000000032]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61959314E12, 593.0], [1.61959362E12, 584.0], [1.61959344E12, 638.0], [1.6195935E12, 601.0], [1.61959332E12, 603.0], [1.61959338E12, 617.0], [1.6195932E12, 565.0], [1.61959368E12, 595.0], [1.61959326E12, 595.0], [1.61959374E12, 618.8499999999995], [1.61959356E12, 588.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61959314E12, 6.0], [1.61959362E12, 9.0], [1.61959344E12, 6.0], [1.6195935E12, 7.0], [1.61959332E12, 8.0], [1.61959338E12, 8.0], [1.6195932E12, 10.0], [1.61959368E12, 6.0], [1.61959326E12, 9.0], [1.61959374E12, 9.0], [1.61959356E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61959314E12, 106.0], [1.61959362E12, 107.0], [1.61959344E12, 112.0], [1.6195935E12, 108.0], [1.61959332E12, 111.0], [1.61959338E12, 112.0], [1.6195932E12, 107.0], [1.61959368E12, 105.0], [1.61959326E12, 107.0], [1.61959374E12, 117.0], [1.61959356E12, 103.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959374E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 67.5, "minX": 1.0, "maxY": 1485.0, "series": [{"data": [[114.0, 380.5], [478.0, 67.5], [621.0, 129.0], [617.0, 137.0], [637.0, 122.0], [623.0, 146.0], [667.0, 124.0], [668.0, 120.0], [642.0, 128.0], [645.0, 132.0], [664.0, 129.0], [666.0, 140.0], [640.0, 127.0], [669.0, 121.0], [655.0, 121.0], [654.0, 123.0], [658.0, 121.5], [662.0, 121.5], [656.0, 137.0], [657.0, 128.0], [679.0, 123.0], [699.0, 115.0], [691.0, 115.0], [693.0, 129.0], [692.0, 113.0], [698.0, 118.0], [701.0, 115.0], [700.0, 114.0], [703.0, 116.0], [702.0, 118.0], [678.0, 124.0], [677.0, 123.0], [676.0, 120.0], [675.0, 112.0], [685.0, 122.0], [684.0, 116.5], [686.0, 121.0], [687.0, 123.0], [683.0, 122.0], [697.0, 124.0], [696.0, 122.0], [681.0, 129.0], [680.0, 132.0], [682.0, 122.0], [729.0, 109.0], [735.0, 116.0], [727.0, 109.0], [726.0, 116.0], [725.0, 111.0], [724.0, 125.0], [722.0, 111.0], [720.0, 113.0], [723.0, 117.0], [730.0, 113.0], [731.0, 114.0], [732.0, 109.0], [734.0, 115.0], [733.0, 109.0], [711.0, 121.0], [709.0, 128.0], [707.0, 130.0], [728.0, 115.0], [704.0, 122.0], [718.0, 115.0], [716.0, 109.0], [715.0, 114.0], [719.0, 122.0], [705.0, 116.0], [712.0, 117.0], [713.0, 118.0], [714.0, 114.0], [761.0, 113.0], [739.0, 108.0], [755.0, 115.0], [749.0, 112.0], [745.0, 117.0], [744.0, 106.5], [746.0, 111.0], [747.0, 117.0], [748.0, 113.0], [751.0, 114.0], [750.0, 107.0], [736.0, 111.5], [738.0, 116.0], [737.0, 113.0], [760.0, 116.0], [741.0, 120.0], [740.0, 112.0], [742.0, 116.0], [759.0, 115.0], [758.0, 110.0], [757.0, 109.0], [756.0, 119.0], [743.0, 123.0], [765.0, 111.0], [754.0, 115.0], [767.0, 109.0], [766.0, 104.0], [752.0, 112.0], [753.0, 107.0], [763.0, 110.0], [764.0, 106.5], [762.0, 109.0], [773.0, 109.0], [769.0, 109.0], [771.0, 108.0], [770.0, 114.0], [772.0, 110.0], [791.0, 109.0], [790.0, 109.0], [789.0, 104.0], [788.0, 112.0], [787.0, 109.0], [794.0, 114.0], [774.0, 115.0], [775.0, 109.0], [792.0, 107.0], [793.0, 102.0], [795.0, 112.0], [781.0, 110.0], [780.0, 111.0], [777.0, 112.0], [779.0, 109.0], [778.0, 109.0], [776.0, 115.0], [796.0, 108.0], [782.0, 110.0], [797.0, 110.0], [785.0, 110.0], [784.0, 111.0], [799.0, 110.0], [798.0, 109.5], [786.0, 106.0], [783.0, 106.0], [768.0, 111.0], [803.0, 109.0], [811.0, 109.0], [815.0, 109.0], [812.0, 104.0], [813.0, 109.0], [814.0, 105.5], [801.0, 106.0], [800.0, 105.5], [802.0, 110.0], [809.0, 107.0], [810.0, 109.0], [808.0, 104.5], [816.0, 108.0], [823.0, 105.0], [822.0, 107.0], [807.0, 112.0], [831.0, 113.0], [827.0, 107.0], [824.0, 112.0], [825.0, 106.0], [826.0, 107.0], [829.0, 108.0], [828.0, 104.0], [830.0, 107.0], [805.0, 108.0], [804.0, 109.0], [806.0, 106.0], [817.0, 110.0], [820.0, 107.0], [819.0, 104.0], [818.0, 109.0], [821.0, 109.0], [860.0, 95.0], [845.0, 100.0], [854.0, 101.5], [855.0, 103.0], [853.0, 105.5], [841.0, 107.0], [840.0, 102.0], [851.0, 102.0], [861.0, 103.0], [849.0, 109.0], [848.0, 107.0], [844.0, 100.0], [843.0, 95.0], [838.0, 112.0], [839.0, 98.0], [856.0, 97.0], [833.0, 104.0], [832.0, 104.0], [834.0, 109.0], [837.0, 108.0], [846.0, 107.0], [847.0, 105.0], [878.0, 97.0], [874.0, 96.0], [865.0, 104.0], [876.0, 97.0], [868.0, 98.0], [870.0, 98.0], [867.0, 113.0], [866.0, 103.0], [884.0, 107.0], [886.0, 102.0], [899.0, 100.0], [896.0, 107.0], [897.0, 106.0], [901.0, 98.0], [1.0, 1485.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 901.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 67.5, "minX": 1.0, "maxY": 1485.0, "series": [{"data": [[114.0, 380.5], [478.0, 67.5], [621.0, 129.0], [617.0, 137.0], [637.0, 122.0], [623.0, 145.0], [667.0, 124.0], [668.0, 120.0], [642.0, 128.0], [645.0, 132.0], [664.0, 129.0], [666.0, 140.0], [640.0, 127.0], [669.0, 120.0], [655.0, 121.0], [654.0, 123.0], [658.0, 121.5], [662.0, 121.0], [656.0, 137.0], [657.0, 128.0], [679.0, 123.0], [699.0, 115.0], [691.0, 114.0], [693.0, 129.0], [692.0, 113.0], [698.0, 118.0], [701.0, 115.0], [700.0, 114.0], [703.0, 116.0], [702.0, 118.0], [678.0, 124.0], [677.0, 123.0], [676.0, 120.0], [675.0, 111.0], [685.0, 122.0], [684.0, 116.0], [686.0, 121.0], [687.0, 123.0], [683.0, 122.0], [697.0, 124.0], [696.0, 121.0], [681.0, 129.0], [680.0, 132.0], [682.0, 122.0], [729.0, 109.0], [735.0, 116.0], [727.0, 109.0], [726.0, 116.0], [725.0, 110.0], [724.0, 125.0], [722.0, 111.0], [720.0, 113.0], [723.0, 117.0], [730.0, 113.0], [731.0, 114.0], [732.0, 109.0], [734.0, 115.0], [733.0, 108.5], [711.0, 121.0], [709.0, 128.0], [707.0, 130.0], [728.0, 115.0], [704.0, 122.0], [718.0, 115.0], [716.0, 109.0], [715.0, 114.0], [719.0, 122.0], [705.0, 116.0], [712.0, 117.0], [713.0, 118.0], [714.0, 114.0], [761.0, 113.0], [739.0, 108.0], [755.0, 115.0], [749.0, 112.0], [745.0, 117.0], [744.0, 106.0], [746.0, 111.0], [747.0, 117.0], [748.0, 113.0], [751.0, 114.0], [750.0, 107.0], [736.0, 111.0], [738.0, 116.0], [737.0, 113.0], [760.0, 116.0], [741.0, 120.0], [740.0, 112.0], [742.0, 116.0], [759.0, 115.0], [758.0, 110.0], [757.0, 109.0], [756.0, 118.5], [743.0, 123.0], [765.0, 111.0], [754.0, 115.0], [767.0, 109.0], [766.0, 104.0], [752.0, 112.0], [753.0, 107.0], [763.0, 109.0], [764.0, 106.5], [762.0, 109.0], [773.0, 109.0], [769.0, 108.0], [771.0, 108.0], [770.0, 114.0], [772.0, 110.0], [791.0, 109.0], [790.0, 109.0], [789.0, 104.0], [788.0, 112.0], [787.0, 109.0], [794.0, 114.0], [774.0, 115.0], [775.0, 109.0], [792.0, 107.0], [793.0, 102.0], [795.0, 112.0], [781.0, 109.5], [780.0, 111.0], [777.0, 112.0], [779.0, 109.0], [778.0, 109.0], [776.0, 115.0], [796.0, 108.0], [782.0, 110.0], [797.0, 110.0], [785.0, 110.0], [784.0, 111.0], [799.0, 110.0], [798.0, 109.0], [786.0, 106.0], [783.0, 106.0], [768.0, 111.0], [803.0, 109.0], [811.0, 109.0], [815.0, 109.0], [812.0, 104.0], [813.0, 109.0], [814.0, 105.5], [801.0, 106.0], [800.0, 105.0], [802.0, 110.0], [809.0, 107.0], [810.0, 108.0], [808.0, 104.5], [816.0, 108.0], [823.0, 105.0], [822.0, 107.0], [807.0, 111.0], [831.0, 113.0], [827.0, 106.5], [824.0, 112.0], [825.0, 106.0], [826.0, 107.0], [829.0, 108.0], [828.0, 104.0], [830.0, 107.0], [805.0, 108.0], [804.0, 109.0], [806.0, 106.0], [817.0, 110.0], [820.0, 107.0], [819.0, 104.0], [818.0, 109.0], [821.0, 109.0], [860.0, 95.0], [845.0, 99.0], [854.0, 101.0], [855.0, 103.0], [853.0, 105.0], [841.0, 106.0], [840.0, 102.0], [851.0, 102.0], [861.0, 103.0], [849.0, 109.0], [848.0, 106.0], [844.0, 100.0], [843.0, 95.0], [838.0, 112.0], [839.0, 98.0], [856.0, 97.0], [833.0, 104.0], [832.0, 104.0], [834.0, 109.0], [837.0, 108.0], [846.0, 107.0], [847.0, 105.0], [878.0, 97.0], [874.0, 96.0], [865.0, 104.0], [876.0, 97.0], [868.0, 98.0], [870.0, 98.0], [867.0, 113.0], [866.0, 103.0], [884.0, 107.0], [886.0, 101.5], [899.0, 100.0], [896.0, 107.0], [897.0, 105.0], [901.0, 98.0], [1.0, 1485.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 901.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 138.53333333333333, "minX": 1.61959314E12, "maxY": 794.8166666666667, "series": [{"data": [[1.61959314E12, 659.8833333333333], [1.61959362E12, 788.1166666666667], [1.61959344E12, 727.1833333333333], [1.6195935E12, 751.4833333333333], [1.61959332E12, 780.7833333333333], [1.61959338E12, 755.7333333333333], [1.6195932E12, 794.8166666666667], [1.61959368E12, 774.6333333333333], [1.61959326E12, 794.4833333333333], [1.61959374E12, 138.53333333333333], [1.61959356E12, 770.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959374E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 141.03333333333333, "minX": 1.61959314E12, "maxY": 794.8166666666667, "series": [{"data": [[1.61959314E12, 657.3833333333333], [1.61959362E12, 788.1166666666667], [1.61959344E12, 727.1833333333333], [1.6195935E12, 751.4833333333333], [1.61959332E12, 780.7666666666667], [1.61959338E12, 755.7333333333333], [1.6195932E12, 794.8166666666667], [1.61959368E12, 774.6333333333333], [1.61959326E12, 794.5], [1.61959374E12, 141.03333333333333], [1.61959356E12, 770.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959374E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 141.03333333333333, "minX": 1.61959314E12, "maxY": 794.8166666666667, "series": [{"data": [[1.61959314E12, 657.3833333333333], [1.61959362E12, 788.1166666666667], [1.61959344E12, 727.1833333333333], [1.6195935E12, 751.4833333333333], [1.61959332E12, 780.7666666666667], [1.61959338E12, 755.7333333333333], [1.6195932E12, 794.8166666666667], [1.61959368E12, 774.6333333333333], [1.61959326E12, 794.5], [1.61959374E12, 141.03333333333333], [1.61959356E12, 770.85]], "isOverall": false, "label": "AuthzRequest-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959374E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 141.03333333333333, "minX": 1.61959314E12, "maxY": 794.8166666666667, "series": [{"data": [[1.61959314E12, 657.3833333333333], [1.61959362E12, 788.1166666666667], [1.61959344E12, 727.1833333333333], [1.6195935E12, 751.4833333333333], [1.61959332E12, 780.7666666666667], [1.61959338E12, 755.7333333333333], [1.6195932E12, 794.8166666666667], [1.61959368E12, 774.6333333333333], [1.61959326E12, 794.5], [1.61959374E12, 141.03333333333333], [1.61959356E12, 770.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959374E12, "title": "Total Transactions Per Second"}},
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

