import React from 'react';

const CalltoActionSection = () => {
    return (
        <div className="subscribe-section bg-with-black">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="subscribe-head">
                            <h2 className="text-shadow-title">Đa dạng mẫu mã</h2>
                            <p className="text-shadow-description">
                                Nhanh tay đăng ký để được trải nghiệm những ưu đãi bất ngờ
                            </p>
                            <form className="form-section">
                                <input value="Có tôi muốn!" name="subscribe" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const redirectToRegister = () => {
    window.location.href = '/register';
};

export default CalltoActionSection;
