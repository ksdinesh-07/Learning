import mongoose from 'mongoose';

const widgetSchema = new mongoose.Schema({
    id: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String, 
        required: true 
    }, // 'bar', 'line', 'table', 'kpi', 'text'
    title: { 
        type: String 

    },
    layout: {
        x: Number,
        y: Number,
        w: Number,
        h: Number
    },
    config: { 
        type: Object 
    }, // Holds data source, filters, colors, etc.
});

const dashboardSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    owner: { 
        type: String, 
        default: 'Admin' 
    },
    visibility: { 
        type: String, 
        default: 'Only Me' 
    }, // 'Only Me', 'Everyone', 'Shared'
    widgets: [widgetSchema]
}, { timestamps: true });

export default mongoose.model('Dashboard', dashboardSchema);