
//  FİLE YÜKLƏMƏK ÜÇÜN
$(document).ready(function () {
FilePond.registerPlugin(
    FilePondPluginImageCrop,
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
);

const inputElement = document.querySelector('.add-image[type="file"]');
const pond = FilePond.create(inputElement, {
    imageCropAspectRatio: 1,
    imageResizeTargetWidth: 100,
    imageEditInstantEdit: true,
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

//  SADƏCƏ ŞƏKİL FORMATINDA YÜKLƏMƏSİ ÜÇÜN
FilePond.create(document.querySelector('.add-image[type="file"]'), {
    acceptedFileTypes:['image/*'],
    fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {
        
        // Do custom type detection here and return with promise

        resolve(type);
    })
});
});