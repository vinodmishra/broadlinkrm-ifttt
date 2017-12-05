// Learn codes here:
// http://rm-bridge.fun2code.de/rm_manage/code_learning.html

// After learning a code, define the command name
// mac address or ip address and leave the data as is.
// add a secret value that must match the request in order to validate (sent as POST parameter).

/*
Example:

    {
        "command": "YOUR_COMMAND_HERE",
        "secret": "SET_A_RANDOM_HASH_HERE",
        "ip": "YOUR_DEVICE_IP_HERE",
        "mac": "MAC_ADDRESS_HERE", // Use mac instead of IP when possible.
        "sequence": ["command", "command"], // If sequence is defined, all the commands inside the array will be run in sequence.
        "data": "RM_BRIDGE_DATA_HERE" // only runs if there is no sequence defined.
    }
*/

module.exports = [{
        "command": "TV_On",
        "secret": "AkDio83",
        "mac":"34:ea:34:8e:e4:40",
        "data": "2600d200959313361337133614111312131212131312113911391138131212121214111412121411143514111411141113121312111312381213123811381337123811391139130005fe96931435143613361312131213121114141111391139123612141114121214111313121114341611180f1411121211141114143612131238113912371238153614351300060097911337143513371114121316101411141114361534153514111510141014111411141113380f14121312141114121213121336141114361534153514351436153512000d05000000000000"
    }
];
