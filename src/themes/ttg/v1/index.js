const colors = {
  bodyTextColor: '#5f5f5f',
  headerTextColor: '#4a4a4a',
  headerBackground: '#F5F5F5',
  border: '#ccc',
  danger: '#bb0000',
  warning: '#f0ad4e'
};
//drop shadows on buttons
const raised = true;
export default {
  theme: {
    layout: {
      corePadding: {
        padding: 10
      }
    },
    global: {
      header: {
        raised
      },
      mainMenu: {
        drawer: true
      }
    },
    buttons: {
      radius: 0,
      size: 18,
      bold: false,
      color: 'white',
      raised,
      uppercase: false
    },
    font: {
      menu: {
        icons: {
          fontSize: 26
        }
      },
      body: {
        normal: {
          fontSize: 18,
          color: colors.bodyTextColor,
          fontWeight: '300'
        },
        bold: {
          fontWeight: '500',
          color: 'black',
          fontSize: 18
        }
      },
      header: {
        h1: {
          fontSize: 28,
          fontWeight: '300',
          color: colors.headerTextColor
        },
        h2: {
          fontSize: 24,
          fontWeight: '300',
          color: colors.headerTextColor
        },
        h3: {
          fontSize: 22,
          fontWeight: '300',
          color: colors.headerTextColor
        },
        h4: {
          fontSize: 20,
          fontWeight: '300',
          color: colors.headerTextColor
        },
        h5: {
          fontSize: 18,
          fontWeight: '300',
          color: colors.headerTextColor
        }
      }
    },
    colors: {
      header: {
        font: 'white'
      },
      login: {
        background: '#E0F2F1'
      },
      core: {
        badgeFontColor: 'yellow',
        border: colors.border,
        headerColor: 'black',
        headerBackground: colors.headerBackground,
        bodyFont: colors.bodyTextColor,
        body: colors.bodyTextColor,
        fontBody: colors.bodyTextColor,
        headerFont: colors.headerTextColor,
        primaryColor: '#FDBF2E',
        secondaryColor: '#A42932',
        tertiaryColor: '#1D4E71',
        defaultButtonColor: '#1D4E71',
        warning: colors.warning,
        danger: colors.danger
      }
    }
  }
};
