export interface Article {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  author: string;
  categories: CategoryTag[];
  content: ContentBlock[];
  createdAt: string;
}

export interface CategoryTag {
  name: string;
  colorClass: string;
}

export type ParagraphSegment = {
  type?: "bold" | "normal" | "link"; 
  text: string;
  url?: string; 
  alt?: string; 
};

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "paragraph2"; content: ParagraphSegment[] }
  | { type: "image"; url: string; alt: string }
  | { type: "heading"; level: number; text: string }
  | {
    type: "list";
    items: {
      type: "paragraph2";
      content: ParagraphSegment[];
    }[];
  }
  | { type: "definition"; text: string };


export const posts: Article[] = [
  {
    id: "1",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    categories: [
      { name: "Design", colorClass: "bg-light-purple text-purple" },
      { name: "Research", colorClass: "bg-light-purple3 text-purple3" },
      { name: "Presentation", colorClass: "bg-light-red text-red" },
    ],
    createdAt: "2025-06-20T00:00:00Z",
    content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "2",
    title: "Migrating to Linear 101",
    coverImage: "/Images/linear.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Phoenix Baker",
    categories: [
      { name: "Design", colorClass: "bg-light-green text-green" },
      { name: "Research", colorClass: "bg-light-red text-red" },
    ],
    createdAt: "2025-06-20T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "3",
    title: "Building your API Stack",
    coverImage: "/Images/APIstack.webp",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managment.",
    author: "Lana Steiner",
    categories: [
      { name: "Design", colorClass: "bg-light-green text-green" },
      { name: "Research", colorClass: "bg-light-red text-red" },
    ],
    createdAt: "2025-06-20T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "4",
    title: "Grid system for better Design User Interface",
    coverImage: "/Images/grid.webp",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    author: "Olivia Rhye",
    categories: [
      { name: "Design", colorClass: "bg-light-purple text-purple" },
      { name: "Interface", colorClass: "bg-light-red text-red" },
    ],

    createdAt: "2025-06-20T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "5",
    title: "Bill Walsh leadership lessons",
    coverImage: "/Images/leadership.webp",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    author: "Alec Whitten",
    categories: [
      { name: "Leadership", colorClass: "bg-light-purple text-purple" },
      { name: "Management", colorClass: "bg-light-gray3 text-gray3" },
    ],

    createdAt: "2025-5-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "6",
    title: "PM mental models",
    coverImage: "/Images/mental.webp",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    author: "Demi WIlkinson",
    categories: [
      { name: "Product", colorClass: "bg-light-green text-green" },
      { name: "Research", colorClass: "bg-light-purple3 text-purple3" },
      { name: "Frameworks", colorClass: "bg-light-red text-red" },
    ],
    createdAt: "2025-5-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "7",
    title: "What is Wireframing?",
    coverImage: "/Images/wireframing.webp",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Candice Wu",
    categories: [
      { name: "Design", colorClass: "bg-light-purple text-purple" },
      { name: "Research", colorClass: "bg-light-purple3 text-purple3" },
    ],
    createdAt: "2025-5-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "8",
    title: "How collaboration makes us better designers",
    coverImage: "/Images/collaboration.webp",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    author: "Natali Craig",
    categories: [
      { name: "Design", colorClass: "bg-light-purple text-purple" },
      { name: "Research", colorClass: "bg-light-purple3 text-purple3" },
    ],
    createdAt: "2025-5-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "9",
    title: "Our top 10 Javascript frameworks to use",
    coverImage: "/Images/javascript.webp",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    author: "Drew Cano ",
    categories: [
      {
        name: "Software Development",
        colorClass: "bg-light-green text-green",
      },
      { name: "Tools", colorClass: "bg-light-red text-red" },
      { name: "SaaS", colorClass: "bg-light-red text-red" },
    ],
    createdAt: "2025-5-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "10",
    title: "Podcast: Creating a better CX Community",
    coverImage: "/Images/UXreview.webp",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    author: "Orlando Diggs",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2025-5-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "11",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "John Doe",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2024-12-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "12",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "John Doe",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2024-12-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "13",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "John Doe",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2024-12-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "14",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "John Doe",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2024-12-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "15",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "John Doe",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2024-12-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "16",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "John Doe",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2024-12-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "17",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "John Doe",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2024-12-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "18",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "John Doe",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2024-12-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "19",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "John Doe",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2024-12-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "20",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "John Doe",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2024-12-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
  {
    id: "21",
    title: "UX review presentations",
    coverImage: "/Images/UXreview.webp",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "John Doe",
    categories: [
      {
        name: "Podcasts",
        colorClass: "bg-light-purple text-purple",
      },
      { name: "Customer Success", colorClass: "bg-light-gray3 text-gray3" },
    ],
    createdAt: "2024-12-01T00:00:00Z",
     content: [
      {
        type: "paragraph",
        text: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      },
      {
        type: "paragraph",
        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
      },
      {
        type: "heading",
        level: 3,
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "image",
        url: "/Images/grid2.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
      },
      {
        type: "paragraph",
        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
      },
      {
        type: "paragraph",
        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      },
      {
        type: "paragraph",
        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      },
      {
        type: "paragraph",
        text: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
      },
      {
        type: "heading",
        level: 4,
        text: "Breaking Down the Grid",
      },
      {
        type: "paragraph",
        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Columns: " },
          {
            type: "normal",
            text: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          { type: "bold", text: "Gutters: " },
          {
            type: "normal",
            text: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid3.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
      },
      {
        type: "heading",
        level: 4,
        text: "Examples of Grids in Use",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 1: Hierarchical Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our first example is from ",
          },
          {
            type: "link",
            text: "The New York Times. ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid4.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 2: Column Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our second example is from ",
          },
          {
            type: "link",
            text: "Ritual.com ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid5.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 3: Modular Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our third example is from ",
          },
          {
            type: "link",
            text: "Behance ",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: "a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          },
        ],
      },

      {
        type: "image",
        url: "/Images/grid6.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Example 4: Breaking the Grid",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "normal",
            text: "Our last example is ",
          },
          {
            type: "link",
            text: "Shrine from Google’s Material Studies",
            url: "#",
            alt: "Material Studies Shrine",
          },
          {
            type: "normal",
            text: ". This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid7.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
      },
      {
        type: "heading",
        level: 5,
        text: "Benefits of the Grid",
      },
      {
        type: "paragraph",
        text: "Using a grid benefits both end users and the designers alike:",
      },
      
      {
        type: "list",
        items: [
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Designers can quickly put together well-aligned interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "Users can easily scan predictable grid-based interfaces."
              }
            ]
          },
          {
            type: "paragraph2",
            content: [
              {
                type: "normal",
                text: "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of"
              },
              {
                type: "link",
                text: " responsive web design",
                url: "#",
                alt: "Material Studies Shrine"
              },
              {
                type: "normal",
                text: " Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
              }
            ]
          }
        ]
      },
      {
        type: "image",
        url: "/Images/grid8.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
      },

      {
        type: "paragraph",
        text: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
      },
      {
        type: "heading",
        level: 4,
        text: "Choosing and Setting Up Your Grid",
      },
      {
        type: "paragraph",
        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Choose the right grid for your needs. ",
          },
          {
            type: "normal",
            text: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
        ],
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Spend time setting up your grid. ",
          },
          {
            type: "normal",
            text: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid9.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Easily set the number of columns, the gutter size, and margin size in Figma.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "ways place content within columns, not gutters. ",
          },
          {
            type: "normal",
            text: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          },
        ],
      },
      {
        type: "image",
        url: "/Images/grid10.webp",
        alt: "grid cover",
      },
      {
        type: "definition",
        text: "Content or elements should be placed within and across columns, not gutters.",
      },
      {
        type: "paragraph2",
        content: [
          {
            type: "bold",
            text: "Consider using an 8px grid system. ",
          },
          {
            type: "normal",
            text: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      },
    ],
  },
];
