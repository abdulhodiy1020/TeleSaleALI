const Role = require("../models/roleModel");

// Create role
exports.createRole = async (req, res) => {
  const { name, permissions } = req.body;
  try {
    const role = new Role({ name, permissions });
    await role.save();
    res.status(201).json({ message: "Role created successfully", role });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Role creation failed", error: err.message });
  }
};

// Get all roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve roles", error: err.message });
  }
};

// Get role by ID
exports.getRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: "Role not found" });

    res.status(200).json(role);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve role", error: err.message });
  }
};

// Update role
exports.updateRole = async (req, res) => {
  try {
    const updatedRole = await Role.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedRole)
      return res.status(404).json({ message: "Role not found" });

    res.status(200).json({ message: "Role updated successfully", updatedRole });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update role", error: err.message });
  }
};

// Delete role
exports.deleteRole = async (req, res) => {
  try {
    await Role.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Role deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete role", error: err.message });
  }
};
