//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contacts"})
};

//@desc Delete a contact
//@route DELETE /api/contacts
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
};

//@desc Get a contact
//@route GET /api/contacts/:id
//@access public
const getOneContact = (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
};

//@desc Create a contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("The request body is:",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({message: "Create contact"});
};

module.exports = {
    getContacts,
    createContact,
    deleteContact,
    updateContact,
    getOneContact
};