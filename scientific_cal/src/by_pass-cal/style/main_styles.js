import { StyleSheet } from "react-native"




  export const styles =StyleSheet.create({

    main_screen: {
     
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    // Display results
   display: {
        elevation: 10,
        width: '95%',
         height: '25%',
        backgroundColor: 'white',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',


         alignItems: 'center',
         justifyContent: 'flex-end',
        marginBottom: 10,
        padding: 10,
    },
   display_text: {
        fontSize: 50,
        textAlign: 'right',
    },
    // ////////////////////////////////////////////////////////////////


    keypad: {
        width: '100%',
        height: '70%',
         backgroundColor: 'black',
        display: 'flex',
        // justifyContent: 'center',
    },
   keypad_row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'black',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    btn_outer: {
        width: 90,
        height: 90,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        
    },
  
    btn1_outer: {
        width: 90,
        height: 90,
        backgroundColor: '#FF5757',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg_button: {
     
        color: 'green',
        fontSize: 30,
    },



    bg1_button: {
        backgroundColor: '#FF5757',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },


    btn2_outer: {
        width: 90,
        height: 90,

        backgroundColor: 'grey',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg2_button: {
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
        

  })



