import Note from "../models/Note.js";


export async function createNote(req, res) {

  try {

    const {
      title,
      content
    } = req.body;

    const note = await Note.create({

      title,

      content,

      user: req.user.id

    });

    res.status(201).json({

      success: true,

      data: note

    });

  } catch (error) {

    res.status(400).json({

      message: error.message

    });

  }
}


export async function getNotes(req, res) {

  try {

    const notes = await Note.find({

      user: req.user.id

    });

    res.json({

      success: true,

      data: notes

    });

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }
}


export async function updateNote(req, res) {

  try {

    const note =
      await Note.findOneAndUpdate(

        {
          _id: req.params.id,
          user: req.user.id
        },

        {
          title: req.body.title,
          content: req.body.content
        },

        {
          new: true
        }

      );

    if (!note) {

      return res.status(404).json({

        message: "Note not found"

      });

    }

    res.json({

      success: true,

      data: note

    });

  } catch (error) {

    res.status(400).json({

      message: error.message

    });

  }
}


export async function deleteNote(req, res) {

  try {

    const note =
      await Note.findOneAndDelete({

        _id: req.params.id,

        user: req.user.id

      });

    if (!note) {

      return res.status(404).json({

        message: "Note not found"

      });

    }

    res.json({

      success: true,

      message: "Note deleted successfully"

    });

  } catch (error) {

    res.status(400).json({

      message: error.message

    });

  }
}