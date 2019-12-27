// DRIVERS PROFILE IMG
$(document).ready(function () {
    FilePond.registerPlugin(
        FilePondPluginImageCrop,
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    const inputElement = document.querySelector('.driver-document-profile[type="file"]');
    const pond = FilePond.create(inputElement, {
        imageCropAspectRatio: 1,
        imageResizeTargetWidth: 100,
        imageEditInstantEdit: true,
        allowImageCrop: true,
        imageResizeMode: 'contain',
        imageTransformVariants: {},
        onaddfile: (err, fileItem) => {
            console.log(err, fileItem.getMetadata('resize'));
        },
        onpreparefile: (fileItem, outputFiles) => {
            outputFiles.forEach(output => {
                const img = new Image();
                img.src = URL.createObjectURL(output.file);
                document.body.appendChild(img);
            })
        }
    });

    // DOWNLOAD ONLY FORMAT OF IMAGES
    FilePond.create(document.querySelector('.add-image[type="file"]'), {
        acceptedFileTypes: ['image/*'],
        fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {

            // Do custom type detection here and return with promise

            resolve(type);
        })
    });
});

// DRIVERS VOEN FRONT IMG
$(document).ready(function () {
    FilePond.registerPlugin(
        FilePondPluginImageCrop,
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    const inputElement = document.querySelector('.driver-document-voen-front[type="file"]');
    const pond = FilePond.create(inputElement, {
        imageCropAspectRatio: 1,
        imageResizeTargetWidth: 100,
        imageEditInstantEdit: true,
        allowImageCrop: true,
        imageResizeMode: 'contain',
        imageTransformVariants: {},
        onaddfile: (err, fileItem) => {
            console.log(err, fileItem.getMetadata('resize'));
        },
        onpreparefile: (fileItem, outputFiles) => {
            outputFiles.forEach(output => {
                const img = new Image();
                img.src = URL.createObjectURL(output.file);
                document.body.appendChild(img);
            })
        }
    });

   
    FilePond.create(document.querySelector('.add-image[type="file"]'), {
        acceptedFileTypes: ['image/*'],
        fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {

            // Do custom type detection here and return with promise

            resolve(type);
        })
    });
});

// DRIVERS VOEN BACK IMG
$(document).ready(function () {
    FilePond.registerPlugin(
        FilePondPluginImageCrop,
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    const inputElement = document.querySelector('.driver-document-voen-back[type="file"]');
    const pond = FilePond.create(inputElement, {
        imageCropAspectRatio: 1,
        imageResizeTargetWidth: 100,
        imageEditInstantEdit: true,
        allowImageCrop: true,
        imageResizeMode: 'contain',
        imageTransformVariants: {},
        onaddfile: (err, fileItem) => {
            console.log(err, fileItem.getMetadata('resize'));
        },
        onpreparefile: (fileItem, outputFiles) => {
            outputFiles.forEach(output => {
                const img = new Image();
                img.src = URL.createObjectURL(output.file);
                document.body.appendChild(img);
            })
        }
    });

   
    FilePond.create(document.querySelector('.add-image[type="file"]'), {
        acceptedFileTypes: ['image/*'],
        fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {

            // Do custom type detection here and return with promise

            resolve(type);
        })
    });
});

// DRIVERS DRIVING LICENSE FRONT IMG
$(document).ready(function () {
    FilePond.registerPlugin(
        FilePondPluginImageCrop,
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    const inputElement = document.querySelector('.driver-document-driving-license-front[type="file"]');
    const pond = FilePond.create(inputElement, {
        imageCropAspectRatio: 1,
        imageResizeTargetWidth: 100,
        imageEditInstantEdit: true,
        allowImageCrop: true,
        imageResizeMode: 'contain',
        imageTransformVariants: {},
        onaddfile: (err, fileItem) => {
            console.log(err, fileItem.getMetadata('resize'));
        },
        onpreparefile: (fileItem, outputFiles) => {
            outputFiles.forEach(output => {
                const img = new Image();
                img.src = URL.createObjectURL(output.file);
                document.body.appendChild(img);
            })
        }
    });

  
    FilePond.create(document.querySelector('.add-image[type="file"]'), {
        acceptedFileTypes: ['image/*'],
        fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {

            // Do custom type detection here and return with promise

            resolve(type);
        })
    });
});

// DRIVERS DRIVING LICENSE BACK IMG
$(document).ready(function () {
    FilePond.registerPlugin(
        FilePondPluginImageCrop,
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    const inputElement = document.querySelector('.driver-document-driving-license-back[type="file"]');
    const pond = FilePond.create(inputElement, {
        imageCropAspectRatio: 1,
        imageResizeTargetWidth: 100,
        imageEditInstantEdit: true,
        allowImageCrop: true,
        imageResizeMode: 'contain',
        imageTransformVariants: {},
        onaddfile: (err, fileItem) => {
            console.log(err, fileItem.getMetadata('resize'));
        },
        onpreparefile: (fileItem, outputFiles) => {
            outputFiles.forEach(output => {
                const img = new Image();
                img.src = URL.createObjectURL(output.file);
                document.body.appendChild(img);
            })
        }
    });

   
    FilePond.create(document.querySelector('.add-image[type="file"]'), {
        acceptedFileTypes: ['image/*'],
        fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {

            // Do custom type detection here and return with promise

            resolve(type);
        })
    });
});
// DRIVERS TEHCHNICAL PASSPORT
$(document).ready(function () {
    FilePond.registerPlugin(
        FilePondPluginImageCrop,
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    const inputElement = document.querySelector('.driver-document-technical-passport[type="file"]');
    const pond = FilePond.create(inputElement, {
        imageCropAspectRatio: 1,
        imageResizeTargetWidth: 100,
        imageEditInstantEdit: true,
        allowImageCrop: true,
        imageResizeMode: 'contain',
        imageTransformVariants: {},
        onaddfile: (err, fileItem) => {
            console.log(err, fileItem.getMetadata('resize'));
        },
        onpreparefile: (fileItem, outputFiles) => {
            outputFiles.forEach(output => {
                const img = new Image();
                img.src = URL.createObjectURL(output.file);
                document.body.appendChild(img);
            })
        }
    });

 
    FilePond.create(document.querySelector('.add-image[type="file"]'), {
        acceptedFileTypes: ['image/*'],
        fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {

            // Do custom type detection here and return with promise

            resolve(type);
        })
    });
});
// DRIVERS COMPULSORY INSURANCE
$(document).ready(function () {
    FilePond.registerPlugin(
        FilePondPluginImageCrop,
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    const inputElement = document.querySelector('.driver-document-compulsory-insurance[type="file"]');
    const pond = FilePond.create(inputElement, {
        imageCropAspectRatio: 1,
        imageResizeTargetWidth: 100,
        imageEditInstantEdit: true,
        allowImageCrop: true,
        imageResizeMode: 'contain',
        imageTransformVariants: {},
        onaddfile: (err, fileItem) => {
            console.log(err, fileItem.getMetadata('resize'));
        },
        onpreparefile: (fileItem, outputFiles) => {
            outputFiles.forEach(output => {
                const img = new Image();
                img.src = URL.createObjectURL(output.file);
                document.body.appendChild(img);
            })
        }
    });

 
    FilePond.create(document.querySelector('.add-image[type="file"]'), {
        acceptedFileTypes: ['image/*'],
        fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {

            // Do custom type detection here and return with promise

            resolve(type);
        })
    });
});
// DRIVERS REFERENCE CONVICTION
$(document).ready(function () {
    FilePond.registerPlugin(
        FilePondPluginImageCrop,
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    const inputElement = document.querySelector('.driver-document-reference-conviction[type="file"]');
    const pond = FilePond.create(inputElement, {
        imageCropAspectRatio: 1,
        imageResizeTargetWidth: 100,
        imageEditInstantEdit: true,
        allowImageCrop: true,
        imageResizeMode: 'contain',
        imageTransformVariants: {},
        onaddfile: (err, fileItem) => {
            console.log(err, fileItem.getMetadata('resize'));
        },
        onpreparefile: (fileItem, outputFiles) => {
            outputFiles.forEach(output => {
                const img = new Image();
                img.src = URL.createObjectURL(output.file);
                document.body.appendChild(img);
            })
        }
    });

 
    FilePond.create(document.querySelector('.add-image[type="file"]'), {
        acceptedFileTypes: ['image/*'],
        fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {

            // Do custom type detection here and return with promise

            resolve(type);
        })
    });
});