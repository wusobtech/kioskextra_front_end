import React from 'react';
import Sheet from 'react-modal-sheet';

export default function BottomSheetModal({ previewArea, headerTitle, headerSubtitle, contentArea }) {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <div onClick={() => setOpen(true)}>
                {previewArea}
            </div>

            <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                <Sheet.Container>
                    <Sheet.Header>
                        <div className="container mb-2">
                            <div className="menu-title">
                                <h1>{headerTitle}</h1>
                                <p className="color-highlight">{headerSubtitle}</p>
                                <a href="#" className="close-menu" onClick={() => setOpen(false)}><i className="fa fa-times"></i></a>
                            </div>
                        </div>
                        <div className="divider divider-margins mb-1 mt-3"></div>
                    </Sheet.Header>
                    <Sheet.Content>
                        {contentArea}
                    </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop />
            </Sheet>
        </>
    );
}