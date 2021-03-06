const data = {
  type: "FeatureCollection",
  stac_version: "1.0.0-beta.2",
  stac_extensions: [],
  context: {
    page: 1,
    limit: 10,
    matched: 36429,
    returned: 10,
  },
  numberMatched: 36429,
  numberReturned: 10,
  features: [
    {
      type: "Feature",
      id: "LC80851132021031",
      bbox: [122.99418, -76.26368, 134.71451, -73.1584],
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [134.70465353524645, -75.50306822351618],
            [125.78846339394053, -76.26213798219652],
            [122.99912432254955, -73.93026803852972],
            [131.8711478296115, -73.16217196226505],
            [134.70465353524645, -75.50306822351618],
          ],
        ],
      },
      properties: {
        collection: "landsat-8-l1",
        datetime: "2021-01-31T23:31:06.725930+00:00",
        "eo:sun_azimuth": 66.96910043,
        "eo:sun_elevation": 23.7521324,
        "eo:cloud_cover": 100,
        "eo:row": "113",
        "eo:column": "085",
        "landsat:product_id": "LC08_L1GT_085113_20210131_20210201_01_RT",
        "landsat:scene_id": "LC80851132021031LGN00",
        "landsat:processing_level": "L1GT",
        "landsat:tier": "RT",
        "landsat:revision": "00",
      },
      assets: {
        index: {
          type: "text/html",
          title: "HTML index page",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_MTL.txt",
        },
        thumbnail: {
          title: "Thumbnail image",
          type: "image/jpeg",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_thumb_large.jpg",
        },
        B1: {
          type: "image/x.geotiff",
          "eo:bands": [0],
          title: "Band 1 (coastal)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_B1.TIF",
        },
        B2: {
          type: "image/x.geotiff",
          "eo:bands": [1],
          title: "Band 2 (blue)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_B2.TIF",
        },
        B3: {
          type: "image/x.geotiff",
          "eo:bands": [2],
          title: "Band 3 (green)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_B3.TIF",
        },
        B4: {
          type: "image/x.geotiff",
          "eo:bands": [3],
          title: "Band 4 (red)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_B4.TIF",
        },
        B5: {
          type: "image/x.geotiff",
          "eo:bands": [4],
          title: "Band 5 (nir)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_B5.TIF",
        },
        B6: {
          type: "image/x.geotiff",
          "eo:bands": [5],
          title: "Band 6 (swir16)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_B6.TIF",
        },
        B7: {
          type: "image/x.geotiff",
          "eo:bands": [6],
          title: "Band 7 (swir22)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_B7.TIF",
        },
        B8: {
          type: "image/x.geotiff",
          "eo:bands": [7],
          title: "Band 8 (pan)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_B8.TIF",
        },
        B9: {
          type: "image/x.geotiff",
          "eo:bands": [8],
          title: "Band 9 (cirrus)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_B9.TIF",
        },
        B10: {
          type: "image/x.geotiff",
          "eo:bands": [9],
          title: "Band 10 (lwir)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_B10.TIF",
        },
        B11: {
          type: "image/x.geotiff",
          "eo:bands": [10],
          title: "Band 11 (lwir)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_B11.TIF",
        },
        ANG: {
          title: "Angle coefficients file",
          type: "text/plain",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_ANG.txt",
        },
        MTL: {
          title: "original metadata file",
          type: "text/plain",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_MTL.txt",
        },
        BQA: {
          title: "Band quality data",
          type: "image/x.geotiff",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20210131_20210201_01_RT/LC08_L1GT_085113_20210131_20210201_01_RT_BQA.TIF",
        },
      },
      links: [
        {
          rel: "self",
          href: "https://landsat-stac.s3.amazonaws.com/landsat-8-l1/085/113/2021-01-31/LC80851132021031.json",
        },
        {
          rel: "root",
          href: "../../../../catalog.json",
        },
        {
          rel: "parent",
          href: "../catalog.json",
        },
        {
          rel: "collection",
          href: "../../../catalog.json",
        },
      ],
    },
    {
      type: "Feature",
      id: "LC80851132020029",
      bbox: [123.00817, -76.26414, 134.72915, -73.15878],
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [134.72384572221333, -75.50268544445241],
            [125.80707551199002, -76.26152326174521],
            [123.01850433255237, -73.92953443331933],
            [131.8910477435517, -73.16167290867966],
            [134.72384572221333, -75.50268544445241],
          ],
        ],
      },
      properties: {
        collection: "landsat-8-l1",
        datetime: "2020-01-29T23:31:04.952747+00:00",
        "eo:sun_azimuth": 67.07563377,
        "eo:sun_elevation": 24.51601619,
        "eo:cloud_cover": 0,
        "eo:row": "113",
        "eo:column": "085",
        "landsat:product_id": "LC08_L1GT_085113_20200129_20200130_01_RT",
        "landsat:scene_id": "LC80851132020029LGN00",
        "landsat:processing_level": "L1GT",
        "landsat:tier": "RT",
        "landsat:revision": "00",
      },
      assets: {
        index: {
          type: "text/html",
          title: "HTML index page",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_MTL.txt",
        },
        thumbnail: {
          title: "Thumbnail image",
          type: "image/jpeg",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_thumb_large.jpg",
        },
        B1: {
          type: "image/x.geotiff",
          "eo:bands": [0],
          title: "Band 1 (coastal)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_B1.TIF",
        },
        B2: {
          type: "image/x.geotiff",
          "eo:bands": [1],
          title: "Band 2 (blue)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_B2.TIF",
        },
        B3: {
          type: "image/x.geotiff",
          "eo:bands": [2],
          title: "Band 3 (green)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_B3.TIF",
        },
        B4: {
          type: "image/x.geotiff",
          "eo:bands": [3],
          title: "Band 4 (red)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_B4.TIF",
        },
        B5: {
          type: "image/x.geotiff",
          "eo:bands": [4],
          title: "Band 5 (nir)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_B5.TIF",
        },
        B6: {
          type: "image/x.geotiff",
          "eo:bands": [5],
          title: "Band 6 (swir16)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_B6.TIF",
        },
        B7: {
          type: "image/x.geotiff",
          "eo:bands": [6],
          title: "Band 7 (swir22)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_B7.TIF",
        },
        B8: {
          type: "image/x.geotiff",
          "eo:bands": [7],
          title: "Band 8 (pan)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_B8.TIF",
        },
        B9: {
          type: "image/x.geotiff",
          "eo:bands": [8],
          title: "Band 9 (cirrus)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_B9.TIF",
        },
        B10: {
          type: "image/x.geotiff",
          "eo:bands": [9],
          title: "Band 10 (lwir)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_B10.TIF",
        },
        B11: {
          type: "image/x.geotiff",
          "eo:bands": [10],
          title: "Band 11 (lwir)",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_B11.TIF",
        },
        ANG: {
          title: "Angle coefficients file",
          type: "text/plain",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_ANG.txt",
        },
        MTL: {
          title: "original metadata file",
          type: "text/plain",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_MTL.txt",
        },
        BQA: {
          title: "Band quality data",
          type: "image/x.geotiff",
          href: "https://landsat-pds.s3.amazonaws.com/c1/L8/085/113/LC08_L1GT_085113_20200129_20200130_01_RT/LC08_L1GT_085113_20200129_20200130_01_RT_BQA.TIF",
        },
      },
      links: [
        {
          rel: "self",
          href: "https://landsat-stac.s3.amazonaws.com/landsat-8-l1/085/113/2020-01-29/LC80851132020029.json",
        },
        {
          rel: "root",
          href: "../../../../catalog.json",
        },
        {
          rel: "parent",
          href: "../catalog.json",
        },
        {
          rel: "collection",
          href: "../../../catalog.json",
        },
      ],
    },
    {
      type: "Feature",
      id: "LC80851132015015LGN00",
      bbox: [122.9717, -76.26704, 134.71451, -73.15631],
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [131.237, -75.19292894478929],
            [129.99913352317094, -75.72471411859856],
            [129.93109375805335, -75.75394387721653],
            [129.846, -75.7905],
            [129.83366738348727, -75.78838912873488],
            [124.44, -74.8652],
            [124.52751553503734, -74.83241003709847],
            [127.6794929342665, -73.65144003053771],
            [127.757, -73.6224],
            [127.98978883286219, -73.6609615831679],
            [131.237, -74.19886368932039],
            [131.5047077946762, -74.24320961546374],
            [132.8983321286358, -74.47406416290082],
            [132.907, -74.4755],
            [132.8362557323126, -74.50589160797418],
            [132.75733326764632, -74.53979655440872],
            [131.237, -75.19292894478929],
          ],
        ],
      },
      properties: {
        collection: "landsat-8-l1",
        datetime: "2015-01-15T23:31:00.338694+00:00",
        "eo:sun_azimuth": 67.15436176,
        "eo:sun_elevation": 27.83046735,
        "eo:cloud_cover": 17,
        "eo:row": "113",
        "eo:column": "085",
        "landsat:product_id": null,
        "landsat:scene_id": "LC80851132015015LGN00",
        "landsat:processing_level": "L1GT",
        "landsat:tier": "pre-collection",
      },
      assets: {
        index: {
          type: "text/html",
          title: "HTML index page",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/index.html",
        },
        thumbnail: {
          title: "Thumbnail image",
          type: "image/jpeg",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_thumb_large.jpg",
        },
        B1: {
          type: "image/x.geotiff",
          "eo:bands": [0],
          title: "Band 1 (coastal)",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_B1.TIF",
        },
        B2: {
          type: "image/x.geotiff",
          "eo:bands": [1],
          title: "Band 2 (blue)",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_B2.TIF",
        },
        B3: {
          type: "image/x.geotiff",
          "eo:bands": [2],
          title: "Band 3 (green)",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_B3.TIF",
        },
        B4: {
          type: "image/x.geotiff",
          "eo:bands": [3],
          title: "Band 4 (red)",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_B4.TIF",
        },
        B5: {
          type: "image/x.geotiff",
          "eo:bands": [4],
          title: "Band 5 (nir)",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_B5.TIF",
        },
        B6: {
          type: "image/x.geotiff",
          "eo:bands": [5],
          title: "Band 6 (swir16)",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_B6.TIF",
        },
        B7: {
          type: "image/x.geotiff",
          "eo:bands": [6],
          title: "Band 7 (swir22)",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_B7.TIF",
        },
        B8: {
          type: "image/x.geotiff",
          "eo:bands": [7],
          title: "Band 8 (pan)",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_B8.TIF",
        },
        B9: {
          type: "image/x.geotiff",
          "eo:bands": [8],
          title: "Band 9 (cirrus)",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_B9.TIF",
        },
        B10: {
          type: "image/x.geotiff",
          "eo:bands": [9],
          title: "Band 10 (lwir)",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_B10.TIF",
        },
        B11: {
          type: "image/x.geotiff",
          "eo:bands": [10],
          title: "Band 11 (lwir)",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_B11.TIF",
        },
        ANG: {
          title: "Angle coefficients file",
          type: "text/plain",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_ANG.txt",
        },
        MTL: {
          title: "original metadata file",
          type: "text/plain",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_MTL.txt",
        },
        BQA: {
          title: "Band quality data",
          type: "image/x.geotiff",
          href: "https://s3-us-west-2.amazonaws.com/landsat-pds/L8/085/113/LC80851132015015LGN00/LC80851132015015LGN00_BQA.TIF",
        },
      },
      links: [
        {
          rel: "self",
          href: "https://landsat-stac.s3.amazonaws.com/landsat-8-l1/085/113/2015-01-15/LC80851132015015LGN00.json",
        },
        {
          rel: "root",
          href: "../../../../catalog.json",
        },
        {
          rel: "parent",
          href: "../catalog.json",
        },
        {
          rel: "collection",
          href: "../../../catalog.json",
        },
      ],
    },
  ],
};

module.exports = data;
