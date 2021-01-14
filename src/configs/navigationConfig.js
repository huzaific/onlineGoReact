import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {

    id:"school",
    title:'School',
    type:'collapse',
    icon:<Icon.Book size={20} />,
    children:[
      {
        id:'list-schools',
        title:'List All Schools',
        type:'item',
        icon:<Icon.Book size={20} />,
        navLink:'#'

      },

      {
        id:'add-school',
        title:'Add School',
        type:'item',
        icon:<Icon.Book size={20} />,
        navLink:'#'

      },
    ]


  },
  {
    id: "students",
    title: "Students",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/StudentList",
  },
  {
    id: "bussiness",
    title: "Bussiness",
    type: "item",
    icon: <Icon.Package size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/BusinessDealMaker",
  }  ,

  {
    id: "tsk",
    title: "TSK",
    type: "item",
    icon: <Icon.Layers size={20} />,
    permissions: ["admin", "editor"],
    navLink: "#",
  },  
  {
    id: "course-overview",
    title: "Course Overview",
    type: "item",
    icon: <Icon.Edit2 size={20} />,
    permissions: ["admin", "editor"],
    navLink: "#",
  },  
  {
    id: "messages",
    title: "Messages",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "#",
  },  

  {
    id: "reports",
    title: "Reports",
    type: "item",
    icon: <Icon.BarChart2 size={20} />,
    permissions: ["admin", "editor"],
    navLink: "#",
  },  

  {
    id: "tabs",
    title: "Tabs",
    type: "collapse",
    icon: <Icon.MoreHorizontal size={20} />,
    children:[
      {
        id: "tabs-web",
        title: "TabsWeb",
        type: "item",
        icon: <Icon.Circle size={20} />,
        navLink: "#",
        permissions : ["admin", "editor"]
      },
      {
        id: "tabs-nytt",
        title: "TabsNytt",
        type: "item",
        icon: <Icon.Circle size={20} />,
        navLink: "#",
        permissions : ["admin", "editor"]
      },
      {
        id: "tabs-invoices",
        title: "TabsInvoices",
        type: "item",
        icon: <Icon.Circle size={20} />,
        navLink: "#",
        permissions : ["admin", "editor"]
      },
      
    ]
   
  },  

  {
    id: "other",
    title: "Other",
    type: "collapse",
    icon: <Icon.MoreHorizontal size={20} />,
    children:[
      {
        id: "followup-lists",
        title: "Followup Lists",
        type: "item",
        icon: <Icon.Circle size={20} />,
        navLink: "/FollowUpList",
        permissions : ["admin", "editor"]
      },
      {
        id: "document-archive",
        title: "Document Archive",
        type: "item",
        icon: <Icon.Circle size={20} />,
        navLink: "/DocumentArchieve",
        permissions : ["admin", "editor"]
      },
      {
        id: "school-setting",
        title: "School Settings",
        type: "item",
        icon: <Icon.Circle size={20} />,
        navLink: "#",
        permissions : ["admin", "editor"]
      },

      {
        id: "users",
        title: "Users",
        type: "item",
        icon: <Icon.Circle size={20} />,
        navLink: "#",
        permissions : ["admin", "editor"]
      },
      
    ]
   
  },  

  {
    id: "warehouse",
    title: "Warehouse",
    type: "item",
    icon: <Icon.Truck size={20} />,
    navLink: "#",
    permissions : ["admin", "editor"]
  },

  {
    id: "resources",
    title: "Resources",
    type: "item",
    icon: <Icon.Users size={20} />,
    navLink: "#",
    permissions : ["admin", "editor"]
  },
]

export default navigationConfig
