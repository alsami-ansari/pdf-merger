# PDF Merger App

This is a simple PDF Merger application built with Node.js and Express. The app allows users to upload multiple PDF files and merge them into a single PDF document.

## Features

- **Upload Multiple PDFs**: Users can select and upload multiple PDF files at once.
- **Merge PDFs**: Combines the uploaded PDFs into a single document.
- **Download Merged PDF**: Users can easily download the merged PDF.

## Technologies Used

- **Node.js**
- **Express.js**
- **pdf-merger-js**

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/samiansari01/pdf-merger.git
    cd pdf-merger
    ```

2. **Install the required dependencies**:

    ```bash
    npm install
    ```

3. **Start the server**:

    ```bash
    npm start
    ```

## Usage

1. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).
2. Use the file upload form to select the PDF files you want to merge.

## Dependencies

- **express**: Web framework for Node.js.
- **pdf-merger-js**: Library to merge PDF files.
- **multer**: Middleware for handling file uploads.

## Acknowledgements

- Thanks to [pdf-merger-js](https://www.npmjs.com/package/pdf-merger-js) for providing an easy-to-use API for merging PDF files.
