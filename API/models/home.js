const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const home = new Schema({
    topTitulo: {
        type:String
    },
    topSubtitulo:{
        type: String
    },
    topTextoBtn:{
        type:String
    },
    topLinkBtn:{
        type:String
    },
    serTitulo: {
        type:String
    },
    serSubtitulo:{
        type: String
    },
    serUmIcone:{
        type:String
    },
    serUmDesc:{
        type:String
    },
    serUmTitulo:{
        type:String
    },
    serDoisIcone:{
        type:String
    },
    serDoisDesc:{
        type:String
    },
    serDoisTitulo:{
        type:String
    },
    serTresIcone:{
        type:String
    },
    serTresDesc:{
        type:String
    },
    serTresTitulo:{
        type:String
    },
    portTitulo: {
        type:String
    },
    portSubtitulo:{
        type: String
    },
    portUmOriginalName: {
        type:String
    },
    portUmFileName:{
        type: String
    },
    portUmTitulo: {
        type:String
    },
    portUmSubtitulo:{
        type: String
    },

    portDoisOriginalName: {
        type:String
    },
    portDoisFileName:{
        type: String
    },
    portDoisTitulo: {
        type:String
    },
    portDoisSubtitulo:{
        type: String
    },

    portTresOriginalName: {
        type:String
    },
    portTresFileName:{
        type: String
    },
    portTresTitulo: {
        type:String
    },
    portTresSubtitulo:{
        type: String
    },

    portQuatroOriginalName: {
        type:String
    },
    portQuatroFileName:{
        type: String
    },
    portQuatroTitulo: {
        type:String
    },
    portQuatroSubtitulo:{
        type: String
    },
},
{
    timestamps:true,
}
);

mongoose.model('Home',home);

